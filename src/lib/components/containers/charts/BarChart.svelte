<script>
    import * as d3 from 'd3'

    export let data, 
            title,
            styles = [],
            barColors = ['var(--secondary-600)', 'var(--secondary-base)', 'var(--secondary-400)', 'var(--secondary-300)', 'var(--secondary-200)', 'var(--secondary-100)', 'var(--secondary-050)'],
            vertical = false,
            horizontal = false,
            stacked = false,
            xKey,
            yKey,
            seriesKey = null

    let width = 750
    let height = 400
    let marginLeft = vertical ? 0 : 125
    let marginRight = vertical ? 0 : 50
    let marginTop = vertical ? 25 : 20
    let marginBottom = vertical ? 25 : 20
    let xScale, yScale, stack

    if (vertical) {
        if (stacked) {
            // seriesNames = Object.keys(data[0]).filter((d) => d !== xKey)

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
            xScale = d3.scaleBand()
                .domain(data.map((d) => d[xKey]))
                .range([marginLeft, width - marginRight])
                .padding(0.1)
                
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
            yScale = d3.scaleBand()
                .domain(d3.groupSort(
                    data,
                    ([d]) => -d[xKey],
                    (d) => d[yKey]
                ))
                .range([marginTop, height - marginBottom])
                .padding(0.2)
            
            xScale = d3.scaleLinear()
                .domain([0, d3.max(data, (d) => d[xKey])])
                .range([width - marginRight, marginLeft])
        }
    }
</script>

<div class='bar-chart-frame' style={styles.join(';')}>
    {#if title}
        <div class="chart-header">
            <h2 class="body-xxl">{title}</h2>
            <slot name="chart-header-contents" />
        </div>
    {/if}

    <svg
        class='bar-chart-svg'
        {width}
        {height}
        viewBox="0 0 {width} {height}"
        style="max-width:100%;height:auto;"
    >
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
                            <text
                                class='bar-label'
                                x={xScale(d.data[0]) + xScale.bandwidth() / 2}
                                y={yScale(d[1]) + ((yScale(d[0]) - yScale(d[1]))/2) + 5}
                                text-anchor="middle"
                            >
                                {d[1] - d[0]}
                            </text>
                        {:else if horizontal}
                            <rect
                                fill={barColors[i]}
                                x={width - xScale(d[0]) + marginLeft/2}
                                y={yScale(d.data[0])}
                                width={xScale(d[0]) -  xScale(d[1])}
                                height={yScale.bandwidth()}
                            />
                            <text
                                class="bar-label"
                                text-anchor="middle"
                                x={width - ((xScale(d[1]) + xScale(d[0])) / 2) + marginLeft/2}
                                y={yScale(d.data[0]) + yScale.bandwidth() / 2 + 5}
                            >
                                {d[1] - d[0]}
                            </text>
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
                            rx={12}
                        />
                        <text
                            class="bar-label"
                            text-anchor="middle"
                            x={xScale(d[xKey]) + xScale.bandwidth() / 2}
                            y={yScale(d[yKey]) - 10}
                        >
                            {d[yKey]}
                        </text>
                    {:else if horizontal}
                        <rect
                            fill={barColors[i]}
                            x={marginLeft}
                            y={yScale(d[yKey])}
                            height={yScale.bandwidth()}
                            width={xScale(0) - xScale(d[xKey])}
                            rx={12}
                        />
                        <text
                            class="bar-label"
                            text-anchor="middle"
                            x={width - xScale(d[xKey]) + 90}
                            y={yScale(d[yKey]) + (yScale.bandwidth() / 2) + 5}
                        >
                            {d[xKey]}
                        </text>
                    {/if}
                {/each}
            </g>
        {/if}
        
    
        <!-- Base Axis -->
        {#if vertical}
            <g class='base-axis' transform="translate(0,{height - marginBottom})">
                <!-- <line stroke="green" x1={marginLeft - 6} x2={width} /> -->
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

        <!-- Side Axis -->
        {#if horizontal}
            <g class='side-axis' transform="translate({marginLeft}, 0)">
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
            </g>
        {/if}
    </svg>

    <slot name="chart-footer-contents" />
</div>

<style>
    .bar-chart-frame {
        width: 100%;
        height: fit-content;
        border: 1px solid black;
        border-radius: 24px;
        padding: var(--spacing09);
    }

    .bar-chart-svg {
        width: 100%;
        height: 100%;
    }

    .chart-header {
        padding-bottom: var(--spacing09);
    }
</style>