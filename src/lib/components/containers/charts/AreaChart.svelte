<script>
	import * as d3 from 'd3'
	import { ChartTooltip } from '$lib/index.js'
	import { browser } from '$app/environment'

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
		valueOneLabel,
		valueTwoLabel,
		seriesKey,
		fullDate,
		yearOnly,
		monthOnly,
		monthDay,
		monthYear,
		line = false,
		stacked = false,
		chartWidth = null,
		chartHeight = null

	let innerWidth
	$: width = innerWidth < 768 ? 294 : chartWidth
	$: height = innerWidth < 768 ? 350 : chartHeight || 400
	$: textOpacitySwitch = innerWidth < 678
	let marginLeft = 50
	let marginRight = 15
	let marginTop = 24
	let marginBottom = 24

	let xScale,
		yScale,
		stroke,
		stack,
		area,
		lines = []
	let formatFull = d3.utcFormat('%b %d, %Y')
	let formatYear = d3.utcFormat('%Y')
	let formatMonth = d3.utcFormat('%b')
	let formatMonthDay = d3.utcFormat('%b %d')
	let formatMonthYear = d3.utcFormat('%b %Y')

	$: {
		if (stacked) {
			for (let obj of data) {
				obj[domain] = new Date(obj[domain])
			}

			stack = d3
				.stack()
				.keys(d3.union(data.map((d) => d[seriesKey])))
				.value(([, D], key) => D.get(key)[range])(
				d3.index(
					data,
					(d) => d[domain],
					(d) => d[seriesKey],
				),
			)

			xScale = d3
				.scaleTime()
				.domain(d3.extent(data, (d) => d[domain]))
				.range([marginLeft, width - marginRight])

			yScale = d3
				.scaleLinear()
				.domain([0, d3.max(stack, (d) => d3.max(d, (d) => d[1]))])
				.range([height - marginBottom, marginTop])

			area = d3
				.area()
				.x((d) => xScale(d.data[0]))
				.y0((d) => yScale(d[0]))
				.y1((d) => yScale(d[1]))

			stroke = d3
				.line()
				.x((d) => xScale(d.data[0]))
				.y((d) => yScale(d[1]))
		} else {
			for (let obj of data) {
				obj[domain] = new Date(obj[domain])
			}

			xScale = d3
				.scaleTime()
				.domain(d3.extent(data, (d) => d[domain]))
				.range([marginLeft, width - marginRight])

			yScale = d3
				.scaleLinear()
				.domain([0, d3.max(data, (d) => d[range])])
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

			//
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

	if (browser) {
		tooltip = d3.select(`#${tooltipId}`)
		tooltipLine = d3.select(`#${tooltipId}-line`)
		tooltipInnerCircle = d3.select(`#${tooltipId}-inner-circle`)
		tooltipOuterCircle = d3.select(`#${tooltipId}-outer-circle`)
	}

	function enterTooltip(e) {
		tooltip.style('opacity', 1)
		tooltipLine.style('opacity', 1)
		tooltipInnerCircle.style('opacity', 1)
		tooltipOuterCircle.style('opacity', 1)
	}

	function movingTooltip(e, d, s, series, i, c) {
		tooltipData.color = c
		tooltipData.x = xScale(data[i][domain]) - 60
		tooltipData.line = xScale(data[i][domain])
		tooltipData.title = s

		let mouseValue
		if (stacked) {
			mouseValue = d[1] - d[0]
			tooltipData.y = yScale(d[1]) - 120 // e.offsetY - 90
			tooltipData.circlePosition = yScale(d[1])
			tooltipData.valueOne = fullDate ? formatFull(d.data[0]) : yearOnly ? formatYear(d.data[0]) : monthOnly ? formatMonth(d.data[0]) : monthDay ? formatMonthDay(d.data[0]) : monthYear ? formatMonthYear(d.data[0]) : formatFull(d.data[0])
		} else {
			mouseValue = data[i][range]
			tooltipData.y = yScale(mouseValue) - 120 // e.offsetY - 90
			tooltipData.circlePosition = yScale(mouseValue)
			tooltipData.valueOne = fullDate ? formatFull(data[i][domain]) : yearOnly ? formatYear(data[i][domain]) : monthOnly ? formatMonth(data[i][domain]) : monthDay ? formatMonthDay(data[i][domain]) : monthYear ? formatMonthYear(data[i][domain]) : formatFull(data[i][domain])
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
					height={height - yScale(data[1] - data[0])}
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
			d={stroke(data)}
		/>
		<path
			fill={line ? 'rgba(0,0,0,0)' : areaColors[0]}
			d={area(data)}
		/>
		{#each data as d, i}
			<!-- svelte-ignore a11y-no-static-element-interactions -->
			<rect 
				on:mouseenter={enterTooltip}
				on:mousemove={(e) => movingTooltip(e, data, data[0][seriesKey], null, i, lineColors[0])}
				on:mouseleave={leaveTooltip}
				stroke="rgba(0, 0, 0, 0)"
				stroke-width={1}
				fill="rgba(0, 0, 0, 0)"
				width={width / data.length}
				height="100%"
				x={xScale(d[domain]) - ((width / data.length) / 2) }
			/>
		{/each}
	{/if}

	<!-- Base Axis -->
	<g transform="translate(0,{height - marginBottom})">
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
						{fullDate ? formatFull(item.data[0]) : yearOnly ? formatYear(item.data[0]) : monthOnly ? formatMonth(item.data[0]) : monthDay ? formatMonthDay(item.data[0]) : monthYear ? formatMonthYear(item.data[0]) : formatFull(item.data[0])}
					</text>
				{/each}
			{/each}
		{:else}
			{#each data as d, i}
				<text
					class="axis-label"
					fill="gray"
					text-anchor="middle"
					fill-opacity={textOpacitySwitch ? (i % 2 === 1 ? '0' : '1') : '1'}
					x={xScale(d[domain])}
					y={22}
				>
					{fullDate ? formatFull(d[domain]) : yearOnly ? formatYear(d[domain]) : monthOnly ? formatMonth(d[domain]) : monthDay ? formatMonthDay(d[domain]) : monthYear ? formatMonthYear(d[domain]) : formatFull(d[domain])}
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
</svg>

<ChartTooltip tooltipInfo={tooltipData} />

<style>
	.area-chart-svg {
		width: 100%;
	}

	.axis-label {
		font-size: 11px;
	}

	.line, .circle {
		opacity: 0;
	}
</style>
