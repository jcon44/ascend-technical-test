<script>
    import * as d3 from 'd3'

    export let data, 
            title,
            styles = [],
            barColors = ['var(--primary-base)', 'var(--secondary-base)', 'var(--tertiary-base)', 'var(--primary-300)', 'var(--secondary-300)'],
            type = 'vertical',
            xKey, 
            yKey

    let width = 750
    let height = 400
    let marginLeft = type === 'vertical' ? 0 : 125
    let marginRight = type === 'vertical' ? 0 : 50
    let marginTop = type === 'vertical' ? 25 : 20
    let marginBottom = type === 'vertical' ? 25 : 20
    let xScale, yScale

    if (type === 'vertical') {
        xScale = d3.scaleBand()
            .domain(data.map((d) => d[xKey]))
            .range([marginLeft, width - marginRight])
            .padding(0.1)
            
        yScale = d3.scaleLinear()
            .domain([0, d3.max(data, (d) => d[yKey])])
            .range([height - marginBottom, marginTop])
    } else if (type === 'horizontal') {
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
    } else if (type === 'stacked-vertical') {
        // TODO
    } else if (type === 'stacked-horizontal') {
        // TODO
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
        <g class='bars'>
            {#each data as d, i}
                {#if type === 'vertical'}
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
                        fill="gray"
                        text-anchor="middle"
                        x={xScale(d[xKey]) + xScale.bandwidth() / 2}
                        y={yScale(d[yKey]) - 10}
                    >
                        {d[yKey]}
                    </text>
                {:else if type === 'horizontal'}
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
                        fill="gray"
                        text-anchor="middle"
                        x={width - xScale(d[xKey]) + 90}
                        y={yScale(d[yKey]) + (yScale.bandwidth() / 2) + 5}
                    >
                        {d[xKey]}
                    </text>
                {/if}
            {/each}
        </g>
    
        <!-- Base Axis -->
        {#if type === 'vertical'}
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
        {#if type === 'horizontal'}
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
        height: auto;
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

    .header-slot, .footer-slot {
        padding-top: var(--spacing09);
        display: flex;
        gap: var(--spacing09);
    }
</style>