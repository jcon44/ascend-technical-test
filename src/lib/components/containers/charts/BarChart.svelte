<script>
    import * as d3 from 'd3'
    import { Card } from "$lib/index.js";
	import { linear } from 'svelte/easing'
	import { tick } from 'svelte'

    export let data,
            styles = [],
            barColors = [],
            vertical = false,
            horizontal = false,
            stacked = false,
            sort = null,
            xKey,
            yKey,
            seriesKey = null

    let width = 750
    let height = 400
    let marginLeft = vertical ? 0 : 125
    let marginRight = vertical ? 0 : 50
    let marginTop = vertical ? 24 : 20
    let marginBottom = vertical ? 24 : 20
    let xScale, yScale, stack

    if (vertical) {
        if (stacked) {
            stack = d3.stack()
                .keys(d3.union(data.map((d) => d[seriesKey])))
                .value(([, D], key) => D.get(key)[yKey])
                (d3.index(data, (d) => d[xKey], (d) => d[seriesKey]))

            xScale = d3.scaleBand()
                .domain(data.map((d) => d[xKey]))
                .range([marginLeft, width - marginRight])
                .padding(0.1)
                
            yScale = d3.scaleLinear()
                .domain([0, d3.max(stack, (d) => d3.max(d, (d) => d[1]))])
                .range([height - marginBottom, marginTop])
        } else {
            if (sort === 'ascending') {
                xScale = d3.scaleBand()
                    .domain(d3.groupSort(
                        data,
                        ([d]) => d[yKey],
                        (d) => d[xKey]
                    ))
                    .range([marginLeft, width - marginRight])
                    .padding(0.2)
            } else if (sort === 'descending') {
                xScale = d3.scaleBand()
                    .domain(d3.groupSort(
                        data,
                        ([d]) => -d[yKey],
                        (d) => d[xKey]
                    ))
                    .range([marginLeft, width - marginRight])
                    .padding(0.2)
            } else {
                xScale = d3.scaleBand()
                    .domain(data.map((d) => d[xKey]))
                    .range([marginLeft, width - marginRight])
                    .padding(0.1)
            }
                
            yScale = d3.scaleLinear()
                .domain([0, d3.max(data, (d) => d[yKey])])
                .range([height - marginBottom, marginTop])
        }
    }
    
    if (horizontal) {
        if (stacked) {
            stack = d3.stack()
                .keys(d3.union(data.map((d) => d[seriesKey])))
                .value(([, D], key) => D.get(key)[xKey])
                (d3.index(data, (d) => d[yKey], (d) => d[seriesKey]))

            yScale = d3.scaleBand()
                .domain(data.map((d) => d[yKey]))
                .range([marginTop, height - marginBottom])
                .padding(0.2)
                
            xScale = d3.scaleLinear()
                .domain([0, d3.max(stack, (d) => d3.max(d, (d) => d[1]))])
                .range([width - marginRight, marginLeft])
        } else {
            if (sort === 'ascending') {
                yScale = d3.scaleBand()
                    .domain(d3.groupSort(
                        data,
                        ([d]) => d[xKey],
                        (d) => d[yKey]
                    ))
                    .range([marginTop, height - marginBottom])
                    .padding(0.2)
            } else if (sort === 'descending') {
                yScale = d3.scaleBand()
                    .domain(d3.groupSort(
                        data,
                        ([d]) => -d[xKey],
                        (d) => d[yKey]
                    ))
                    .range([marginTop, height - marginBottom])
                    .padding(0.2)
            } else {
                yScale = d3.scaleBand()
                .domain(data.map((d) => d[yKey]))
                .range([marginTop, height - marginBottom])
                .padding(0.2)
            }
            
            xScale = d3.scaleLinear()
                .domain([0, d3.max(data, (d) => d[xKey])])
                .range([width - marginRight, marginLeft])
        }
    }
</script>

<svg
    class='bar-chart-svg'
    {width}
    {height}
    viewBox="0 0 {width} {height}"
    style="max-width:100%;height:auto;"
>
    <!-- Side Axis -->
    <g class='side-axis' transform="translate({marginLeft}, 0)">
        {#if horizontal}
            <line stroke="var(--neutral-050)" y1={marginTop} y2={height-marginBottom} />
            {#each data as d}
                <text
                    fill="gray"
                    text-anchor="start"
                    x={-100}
                    y={yScale(d[yKey]) + (yScale.bandwidth() / 2) + 5}
                >
                    {d[yKey]}
                </text>
            {/each}
        {:else if vertical}
            {#each yScale.ticks() as tick}
                <line
                    stroke="var(--neutral-050)"
                    x1={marginLeft}
                    x2={width - marginRight}
                    y1={yScale(tick)}
                    y2={yScale(tick)}
                />
            {/each}
        {/if}
    </g>

    <!-- Base Axis -->
    {#if vertical}
    <g class='base-axis' transform="translate(0,{height - marginBottom})">
        <line stroke="var(--neutral-050)" x1={marginLeft - 6} x2={width} />
        {#each data as d}
            <text
                fill="gray"
                text-anchor="middle"
                x={xScale(d[xKey]) + xScale.bandwidth() / 2}
                y={22}
            >
                {d[xKey]}
            </text>
        {/each}
    </g>
    {/if}

    <!-- Bars -->
    {#if stacked}
        <g class='bars'>
            {#each stack as series, i}
                {#each series as d}
                    {#if vertical}
                        <rect
                            fill={barColors[i]}
                            x={xScale(d.data[0])}
                            y={yScale(d[1])}
                            width={xScale.bandwidth()}
                            height={yScale(d[0]) - yScale(d[1])}
                        />
                        <!-- <text
                            class='bar-label'
                            x={xScale(d.data[0]) + xScale.bandwidth() / 2}
                            y={yScale(d[1]) + ((yScale(d[0]) - yScale(d[1]))/2) + 5}
                            text-anchor="middle"
                        >
                            {d[1] - d[0]}
                        </text> -->
                    {:else if horizontal}
                        <rect
                            fill={barColors[i]}
                            x={width - xScale(d[0]) + marginLeft/2}
                            y={yScale(d.data[0])}
                            width={xScale(d[0]) -  xScale(d[1])}
                            height={yScale.bandwidth()}
                        />
                        <!-- <text
                            class="bar-label"
                            text-anchor="middle"
                            x={width - ((xScale(d[1]) + xScale(d[0])) / 2) + marginLeft/2}
                            y={yScale(d.data[0]) + yScale.bandwidth() / 2 + 5}
                        >
                            {d[1] - d[0]}
                        </text> -->
                    {/if}
                {/each}
            {/each}
        </g>
    {:else}
        <g class='bars'>
            {#each data as d, i}
                {#if vertical}
                    <rect 
                        fill={barColors[i]}
                        x={xScale(d[xKey])}
                        y={yScale(d[yKey])}
                        height={yScale(0) - yScale(d[yKey])}
                        width={xScale.bandwidth()}
                    />
                    <!-- <text
                        class="bar-label"
                        text-anchor="middle"
                        x={xScale(d[xKey]) + xScale.bandwidth() / 2}
                        y={yScale(d[yKey]) - 10}
                    >
                        {d[yKey]}
                    </text> -->
                {:else if horizontal}
                    <rect
                        fill={barColors[i]}
                        x={marginLeft}
                        y={yScale(d[yKey])}
                        height={yScale.bandwidth()}
                        width={xScale(0) - xScale(d[xKey])}
                    />
                    <!-- <text
                        class="bar-label"
                        text-anchor="middle"
                        x={width - xScale(d[xKey]) + 90}
                        y={yScale(d[yKey]) + (yScale.bandwidth() / 2) + 5}
                    >
                        {d[xKey]}
                    </text> -->
                {/if}
            {/each}
        </g>
    {/if}
</svg>

<style>
    .bar-chart-svg {
        width: 100%;
        height: 100%;
    }
</style>