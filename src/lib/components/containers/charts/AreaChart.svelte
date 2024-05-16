<script>
    import * as d3 from 'd3'
    import { formatDate } from '$lib';
	import ChartTooltip from '../labels/ChartTooltip.svelte'

    export let data, 
            title,
            areaColors = ['var(--secondary-trans-600)', 'var(--secondary-trans-500)', 'var(--secondary-trans-400)', 'var(--secondary-trans-300)', 'var(--secondary-trans-200)', 'var(--secondary-trans-100)'],
            lineColors = ['var(--secondary-600)', 'var(--secondary-base)', 'var(--secondary-400)', 'var(--secondary-300)', 'var(--secondary-200)', 'var(--secondary-100)'],
            styles = [],
            xKey, 
            yKey,
            stacked = false

    let width = 750
    let height = 400
    let marginLeft = 0 // 20
    let marginRight = 0 // 20
    let marginTop = 50
    let marginBottom = 50

    let xScale, yScale, minX, maxX, line, areas = [], lines =[], path

    if (stacked) {
        if (xKey === 'date') {
            for (let series of data) {
                for (let obj of series) {
                    obj.formattedLabel = formatDate(obj[xKey])
                    obj[xKey] = new Date(obj[xKey])
                }

                xScale = d3.scaleUtc(d3.extent(series, (s) => s[xKey]), [marginLeft, width - marginRight])
                yScale = d3.scaleLinear()
                    .domain([0, d3.max(series, (s) => s[yKey])])
                    .range([height - marginBottom, marginTop])
            
                minX = series[0][xKey]
                maxX = series[series.length - 1][xKey]
            
                line = d3.line().x((s) => s[xKey]).y((s) => s[yKey])
            
                path = `M${series.map((s) => `${xScale(s[xKey])},${yScale(s[yKey])}`).join('L')}`
                lines.push(path)
                areas.push(`${path}L${xScale(maxX)},${yScale(0)}L${xScale(minX)},${yScale(0)}Z`)
            }
        }
    } else {
        if (xKey === 'date') {
            for (let obj of data) {
                obj.formattedLabel = formatDate(obj[xKey])
                obj[xKey] = new Date(obj[xKey])
            }
        }
    
        xScale = d3.scaleUtc(d3.extent(data, (d) => d[xKey]), [marginLeft, width - marginRight])
        yScale = d3.scaleLinear()
            .domain([0, d3.max(data, (d) => d[yKey])])
            .range([height - marginBottom, marginTop])
    
        minX = data[0][xKey]
        maxX = data[data.length - 1][xKey]
    
        line = d3.line().x((d) => d[xKey]).y((d) => d[yKey])
    
        path = `M${data.map((d) => `${xScale(d[xKey])},${yScale(d[yKey])}`).join('L')}`
        lines.push(path)
        areas.push(`${path}L${xScale(maxX)},${yScale(0)}L${xScale(minX)},${yScale(0)}Z`)
    }

    let mouse = { x: 0, y: 0 }
    function handleTooltip(e) {
        mouse.x = e.offsetX
        mouse.y = e.offsetY    
    }
</script>

<div class='area-chart-frame' style={styles.join(';')}>
    {#if title}
        <div class="chart-header">
            <h2 class="body-xxl">{title}</h2>
            <slot name="chart-header-contents" />
        </div>
    {/if}

    <svg
        class="area-chart-svg"
        {width}
        {height}
        viewBox="0 0 {width} {height}"
    >
        <defs>
            {#each areaColors as gradient, i}    
                <linearGradient id="area-gradient{i}" x1="0%" x2="0%" y1="0%" y2="100%">
                    <stop offset="100%" stop-color="white" opacity="0" />
                    <stop offset="0%" stop-color="{gradient[i]}" opacity="1" />
                </linearGradient>
            {/each}
        </defs>

        <!-- TODO Gradient was working and then stopped working -->
        {#each areas as area, i}
            <path
                fill={areaColors[i]}
                d={area}
            />
        {/each}
        {#each lines as line, i}
            <path 
                stroke={lineColors[i]}
                stroke-width="3"
                fill="none"
                d={line}
            />
        {/each}

        <!-- Base Axis -->
        <g transform="translate(0,{height - marginBottom})">
            {#if stacked}
                {#each data[0] as d, i}
                    <text
                        fill="gray"
                        text-anchor="start"
                        x={(width/data[0].length) * i}
                        y={22}
                    >
                        {xKey === 'date' ? d.formattedLabel : d[xKey]}
                    </text>
                {/each}
            {:else}
                {#each data as d, i}
                    <text
                        fill="gray"
                        text-anchor="start"
                        x={(width/data.length) * i}
                        y={22}
                    >
                        {xKey === 'date' ? d.formattedLabel : d[xKey]}
                    </text>
                {/each}
            {/if}
        </g>

        <!-- <ChartTooltip x={mouse.x} y={mouse.y} /> -->
    </svg>

    <slot name="chart-footer-contents" />
</div>

<style>
    .area-chart-frame {
        width: 100%;
        height: auto;
        border: 1px solid black;
        border-radius: 24px;
    }

    .area-chart-svg {
        width: 100%;
        height: 100%;
    }

    .chart-header {
        padding: var(--spacing09);
    }
</style>