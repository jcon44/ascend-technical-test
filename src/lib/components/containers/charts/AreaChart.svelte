<script>
	import * as d3 from 'd3'
	import { ChartTooltip, RuleTip, abbreviateNumber } from '$lib/index.js'
	import { browser } from '$app/environment'
	import { onMount } from 'svelte'

	/**
	 *  @param {array} data
	 *      data - an array of objects containing the area chart data.
	 *      For UNSTACKED area charts each object must have a minimum of three properties –
	 *      one for the domain, one for the range, and one for the series differentiator =>
	 *      { x: <domain-value>, y: <range-value>, series: <series-name>, ... }.
	 *      Note that there can be more properties within this object, but they are not accessed
	 *      by the chart component.
	 *
	 *  @param {string} domain
	 *      domain - string property that declares the name of the object key used to define the x-axis.
	 *
	 *  @param {string} range
	 *      range - string property that declares the name of the object key used to define the y-axis.
	 *
	 *  @param {string} seriesKey
	 *      seriesKey - string property that declares the object key differentiating each series
	 */

	export let data = [],
		tooltipId,
		areaColors = [],
		lineColors = [],
		domain,
		range,
		domainLabel = '',
		rangeLabel = '',
		rule = null,
		valueOneLabel,
		valueTwoLabel,
		seriesKey,
		fullDate,
		yearOnly,
		monthOnly,
		monthDay,
		monthYear,
		quarters = false,
		fiscalQuarters = false,
		line = false,
		stacked = false,
		chartWidth = 700,
		chartHeight = 400

	let innerWidth
	$: width = chartWidth
	$: height = chartHeight
	$: textOpacitySwitch = innerWidth < 678
	let marginLeft = 50
	let marginRight = 15
	let marginTop = 24
	let marginBottom = domainLabel ? 50 : 24
	let avgArray = []
	let position = rule
	
	let chartData = [...data]

	let xScale,
		yScale,
		stroke,
		stack,
		area

	let formatFull = d3.utcFormat('%-m/%-d/%Y')
	let formatYear = d3.utcFormat('%Y')
	let formatMonth = d3.utcFormat('%b')
	let formatMonthDay = d3.utcFormat('%-m/%-d')
	let formatMonthYear = d3.utcFormat('%-m/%Y')
	let formatQuarter = (d) => `Q${d3.utcFormat(`%q %Y`)(d)}`
	let formatFiscalQuarter = (d) => {
		if (Number(d3.utcFormat('%q')(d)) < 3) {
			return `Q${Number(d3.utcFormat('%q')(d)) + 2} SFY${d3.utcFormat('%Y')(d)}`
		} else {
			return `Q${Number(d3.utcFormat('%q')(d)) - 2} SFY${Number(d3.utcFormat('%Y')(d)) + 1}`
		}
	} // offset by 2 quarters
	
	$: tickFormat = d3.timeDay
	$: labelFormat = formatFull
	$: everyOther = false

	$: {
		if (innerWidth < 768) {
			marginLeft = rangeLabel ? 70 : 35
		} else if (innerWidth >= 768) {
			marginLeft = rangeLabel ? 80 : 50
		}

		if (stacked) {
			for (let obj of chartData) {
				obj[domain] = new Date(obj[domain])
			}

			stack = d3
				.stack()
				.keys(d3.union(chartData.map((d) => d[seriesKey])))
				.value(([, D], key) => D.get(key)[range])(
				d3.index(
					chartData,
					(d) => d[domain],
					(d) => d[seriesKey],
				),
			)

			xScale = d3
				.scaleTime()
				.domain(d3.extent(chartData, (d) => d[domain]))
				.range([marginLeft, width - marginRight])

			yScale = d3
				.scaleLinear()
				.domain([0, d3.max(stack, (d) => d3.max(d, (d) => d[1]))])
				.range([height - marginBottom, marginTop])

			area = d3
				.area()
				.x((d) => xScale(d.chartData[0]))
				.y0((d) => yScale(d[0]))
				.y1((d) => yScale(d[1]))

			stroke = d3
				.line()
				.x((d) => xScale(d.chartData[0]))
				.y((d) => yScale(d[1]))
		} else {
			for (let obj of chartData) {
				obj[domain] = new Date(obj[domain])
			}

			// calculate the tick frequency here
			// while still in the update block
			const dayInterval = d3.timeDay.count(d3.min(chartData, (d) => d[domain]), d3.max(chartData, (d) => d[domain]))
			const monthInterval = d3.timeMonth.count(d3.min(chartData, (d) => d[domain]), d3.max(chartData, (d) => d[domain]))
			const yearInterval = d3.timeYear.count(d3.min(chartData, (d) => d[domain]), d3.max(chartData, (d) => d[domain]))

			let allValues = []
			if (quarters) {
				labelFormat = formatQuarter
				tickFormat = d3.timeQuarter
			} else if (fiscalQuarters) {
				labelFormat = formatFiscalQuarter
				tickFormat = d3.timeQuarter
			} else if (yearInterval >= 2 && yearInterval <= 20) {
				labelFormat = formatYear
				tickFormat = d3.timeYear
				everyOther = false

			// 	// sequential accumulation of values into a single date point.
			// 	// DATA ARRAY MUST BE ORDERED BY DATE FOR THIS TO WORK
			// 	let years =[]
			// 	let yearIndex = 0
			// 	for (let i = 0; i < chartData.length; i++) {
			// 		if (i === 0) {
			// 			years.push(chartData[i])
			// 		} else if (chartData[i][domain].getFullYear() === chartData[i-1][domain].getFullYear()) {
			// 			years[yearIndex][range] += chartData[i][range]
			// 		} else if (chartData[i][domain].getFullYear() !== chartData[i-1][domain].getFullYear()) {
			// 			yearIndex++
			// 			years.push(chartData[i])
			// 		}
			// 	}
			// 	chartData = years
				if (yearInterval >= 11) everyOther = true
			} else if (monthInterval >= 2 && monthInterval <= 23) {
				labelFormat = formatMonthYear // eo
				tickFormat = d3.timeMonth
				everyOther = false

			// 	// sequential accumulation of values into a single date point.
			// 	// DATA ARRAY MUST BE ORDERED BY DATE FOR THIS TO WORK
				let months = []
				let monthIndex = 0
				for (let i = 0; i < chartData.length; i++) {
					if (i === 0) {
						months.push(chartData[i])
					} else if (chartData[i][domain].getMonth() === chartData[i-1][domain].getMonth()) {
						months[monthIndex][range] += chartData[i][range]
					} else if (chartData[i][domain].getMonth() !== chartData[i-1][domain].getMonth()) {
						monthIndex++
						months.push(chartData[i])
					}
				}
				chartData = months
				if (monthInterval >= 13) everyOther = true
			} else if (dayInterval <= 31) {
				labelFormat = formatMonthDay
				tickFormat = d3.timeDay
				everyOther = false
			}

			xScale = d3
				.scaleTime()
				.domain(d3.extent(chartData, (d) => d[domain]))
				.range([marginLeft, width - marginRight])

			yScale = d3
				.scaleLinear()
				.domain([0, d3.max(chartData, (d) => d[range])])
				.range([height - marginBottom, marginTop])

			area = d3
				.area()
				.x((d) => xScale(d[domain]))
				.y0(yScale(0))
				.y1((d) => yScale(d[range]))

			stroke = d3
				.line()
				.x((d) => xScale(d[domain]))
				.y((d) => yScale(d[range]))

				if (rule === 'avg') {
					let avg = 0
					chartData.forEach((el) => avgArray.push(el[range]))
					avgArray.forEach((el) => avg += el)
					position = avg / avgArray.length
				}
		}
	}

	let tooltip,
		tooltipLine,
		tooltipInnerCircle,
		tooltipOuterCircle,
		tooltipData = { y: 0, x: 0, line: 0, circlePosition: 0, color: '', title: '', tooltipId, valueOneLabel, valueOne: 0 }

	if (valueTwoLabel) {
		tooltipData.valueTwoLabel = valueTwoLabel
		tooltipData.valueTwo = 0
	}

	onMount(() => {
		if (browser) {
			tooltip = d3.select(`#${tooltipId}`)
			tooltipLine = d3.select(`#${tooltipId}-line`)
			tooltipInnerCircle = d3.select(`#${tooltipId}-inner-circle`)
			tooltipOuterCircle = d3.select(`#${tooltipId}-outer-circle`)
		}
	})

	function enterTooltip(e) {
		tooltip.style('opacity', 1)
		tooltipLine.style('opacity', 1)
		tooltipInnerCircle.style('opacity', 1)
		tooltipOuterCircle.style('opacity', 1)
	}

	function movingTooltip(e, d, s, series, i, c) {
		tooltipData.color = c
		tooltipData.x = xScale(chartData[i][domain]) - 60
		tooltipData.line = xScale(chartData[i][domain])
		tooltipData.title = s

		let mouseValue
		if (stacked) {
			mouseValue = d[1] - d[0]
			tooltipData.x = xScale(d.data[0]) - 60
			tooltipData.line = xScale(d.data[0])
			tooltipData.y = yScale(d[1]) - 120 // e.offsetY - 90
			tooltipData.circlePosition = yScale(d[1])
			tooltipData.valueOne = fullDate ? formatFull(d.data[0]) : yearOnly ? formatYear(d.data[0]) : monthOnly ? formatMonth(d.data[0]) : monthDay ? formatMonthDay(d.data[0]) : monthYear ? formatMonthYear(d.data[0]) : quarters ? formatQuarter(d.data[0]) : formatFull(d.data[0])
		} else {
			mouseValue = chartData[i][range]
			tooltipData.y = yScale(mouseValue) - 120 // e.offsetY - 90
			tooltipData.circlePosition = yScale(mouseValue)
			tooltipData.valueOne = fullDate ? formatFull(chartData[i][domain]) : yearOnly ? formatYear(chartData[i][domain]) : monthOnly ? formatMonth(chartData[i][domain]) : monthDay ? formatMonthDay(chartData[i][domain]) : monthYear ? formatMonthYear(chartData[i][domain]) : quarters ? formatQuarter(d.data[0]) : formatFull(chartData[i][domain])
		}

		if (tooltipData.valueTwoLabel) tooltipData.valueTwo = mouseValue
	}

	function leaveTooltip(e) {
		tooltip.style('opacity', 0)
		tooltipLine.style('opacity', 0)
		tooltipInnerCircle.style('opacity', 0)
		tooltipOuterCircle.style('opacity', 0)
	}
</script>

<svelte:window bind:innerWidth />

<svg
	class="area-chart-svg"
	viewBox="0 0 {width} {height}"
>
	<!-- Y-Axis lines -->
	<!-- {#if rangeLabel}
		<text
			text-anchor="middle"
			x={marginLeft}
			y={height / 2 - 40}
			transform="rotate(-90, {marginLeft - 15}, {height / 2})"
			fill="var(--neutral-400)"
			class="axis-label"
		>
			{rangeLabel}
		</text>
	{/if} -->
	{#each yScale.ticks() as tick}
		<line
			stroke="var(--neutral-050)"
			x1={marginLeft}
			x2={width - marginRight}
			y1={yScale(tick)}
			y2={yScale(tick)}
		/>
		<text
			class="axis-label"
			fill="var(--neutral-400)"
			text-anchor="end"
			x={marginLeft - 15}
			y={yScale(tick) + 5}
		>
			{tick}
			<!-- {abbreviateNumber(tick, 1000)} -->
		</text>
	{/each}

	<!-- Areas -->
	{#if stacked}
		{#each stack as series, i}
			<path
				stroke={lineColors[i]}
				stroke-width={2}
				fill="none"
				d={stroke(series)}
			/>
			{#if !line}
				<path
					fill={areaColors[i]}
					d={area(series)}
				/>
			{/if}
			{#each series as data, j}
				<!-- svelte-ignore a11y-no-static-element-interactions -->
				<rect 
					on:mouseenter={enterTooltip}
					on:mousemove={(e) => movingTooltip(e, data, series.key, i, j, lineColors[0])}
					on:mouseleave={leaveTooltip}
					stroke="rgba(0, 0, 0, 0)"
					stroke-width={1}
					fill="rgba(0, 0, 0, 0)"
					width={width / series.length}
					height={height - yScale(data[1] - data[0]) - 24}
					x={xScale(data.data[0]) - ((width / series.length) / 2)}
					y={yScale(data[1])}
				/>
			{/each}
		{/each}
	{:else}
		<path
			stroke={lineColors[0]}
			stroke-width="2"
			fill="none"
			d={stroke(chartData)}
		/>
		<path
			fill={line ? 'rgba(0,0,0,0)' : areaColors[0]}
			d={area(chartData)}
		/>
		{#each chartData as d, i}

			<!-- svelte-ignore a11y-no-static-element-interactions -->
			<rect 
				on:mouseenter={enterTooltip}
				on:mousemove={(e) => movingTooltip(e, chartData, chartData[0][seriesKey], null, i, lineColors[0])}
				on:mouseleave={leaveTooltip}
				stroke="rgba(0, 0, 0, 0)"
				stroke-width={1}
				fill="rgba(0, 0, 0, 0)"
				width={width / chartData.length}
				height="100%"
				x={xScale(d[domain]) - ((width / chartData.length) / 2) }
				y={-24}
			/>
		{/each}
	{/if}

	<!-- Rule -->

	<!-- TODO: ADD RANGE AND DOMAIN LABELS TO AREA CHART -->
	<!-- Base Axis -->
	<g transform="translate(0,{height - marginBottom})">
		{#if domainLabel}
			<text
				text-anchor="middle"
				x={width / 2}
				y={45}
				class="axis-label"
				fill="var(--neutral-400)"
			>
				{domainLabel}
			</text>
		{/if}
		{#if stacked}
			{#each stack as series}
				{#each series as item, i}
					<line
						stroke="var(--neutral-050)"
						stroke-width={2}
						x1={xScale(item.data[0])}
						x2={xScale(item.data[0])}
						y1={marginTop}
						y2={height - marginBottom}
					/>
					<text
						class="axis-label"
						fill="gray"
						text-anchor="middle"
						fill-opacity={textOpacitySwitch ? (i % 2 === 1 ? '0' : '1') : '1'}
						x={xScale(item.data[0])}
						y={22}
					>
						<!-- {#if everyOther}
							{i % 2 === 1 ? labelFormat(tick) : ''}
						{:else}
							{labelFormat(tick)}
						{/if} -->
						{fullDate ? formatFull(item.data[0]) : yearOnly ? formatYear(item.data[0]) : monthOnly ? formatMonth(item.data[0]) : monthDay ? formatMonthDay(item.data[0]) : monthYear ? formatMonthYear(item.data[0]) : quarters ? formatQuarter(item.data[0]) : formatFull(item.data[0])}
					</text>
				{/each}
			{/each}
		{:else}
			{#each xScale.ticks(tickFormat) as tick, i}
				<text
					class="axis-label"
					fill="gray"
					text-anchor="middle"
					fill-opacity={textOpacitySwitch ? (i % 2 === 1 ? '0' : '1') : '1'}
					x={xScale(tick)}
					y={22}
				>
					{#if everyOther}
						{i % 2 === 1 ? labelFormat(tick) : ''}
					{:else if quarters || fiscalQuarters}
						{i % 3 === 1 ? labelFormat(tick) : ''}
					{:else}
						{labelFormat(tick)}
					{/if}
				</text>
			{/each}
		{/if}
	</g>

	<!-- Tooltip Line -->
	<line
		id={`${tooltipId}-line`}
		class="line"
		stroke="var(--neutral-trans-100)"
		stroke-dasharray="2 3"
		x1={tooltipData.line}
		x2={tooltipData.line}
		y1={marginTop}
		y2={height - marginBottom}
	/>

	<!-- Tooltip Circle -->
	<circle 
		id={`${tooltipId}-outer-circle`}
		class="circle"
		fill="white"
		cx={tooltipData.line}
		cy={tooltipData.circlePosition}
		r=12
	/>
	<circle 
		id={`${tooltipId}-inner-circle`}
		class="circle"
		fill={tooltipData.color}
		cx={tooltipData.line}
		cy={tooltipData.circlePosition}
		r=6
	/>

	<!-- Rule -->
	{#if rule}
		<line 
			class="rule"
			stroke="var(--neutral-400)"
			stroke-width="1"
			stroke-dasharray="3 2"
			x1={marginLeft}
			x2={width}
			y1={rule === 'avg' ? yScale(position) : yScale(rule)}
			y2={rule === 'avg' ? yScale(position) : yScale(rule)}
		/>
	{/if}
</svg>

{#if rule}
	<RuleTip value={rule} position={yScale(position)} />
{/if}
<ChartTooltip tooltipInfo={tooltipData} />

<style>
	.area-chart-svg {
		display: block;
		width: 100%;
		height: 100%;
	}

	.axis-label {
		font-size: 11px;
	}

	.line, .circle {
		opacity: 0;
	}
</style>
