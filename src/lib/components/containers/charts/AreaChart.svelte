<script>
    import * as d3 from 'd3'
    import { formatDate } from '$lib';

    export let data,
            areaColors = [],
            lineColors = [],
            styles = [],
            xKey, 
            yKey,
            line = false,
            stacked = false

    let width = 750
    let height = 400
    let marginLeft = 0 // 20
    let marginRight = 0 // 20
    let marginTop = 24
    let marginBottom = 50

    let xScale, yScale, minX, maxX, stroke, areas = [], lines =[], path

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
            
                stroke = d3.line().x((s) => s[xKey]).y((s) => s[yKey])
            
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
    
        stroke = d3.line().x((d) => d[xKey]).y((d) => d[yKey])
    
        path = `M${data.map((d) => `${xScale(d[xKey])},${yScale(d[yKey])}`).join('L')}`
        lines.push(path)
        areas.push(`${path}L${xScale(maxX)},${yScale(0)}L${xScale(minX)},${yScale(0)}Z`)
    }
</script>

<svg
    class="area-chart-svg"
    {width}
    {height}
    viewBox="0 0 {width} {height}"
>
    {#each yScale.ticks() as tick}
        <line
            stroke="var(--neutral-050)"
            x1={marginLeft}
            x2={width - marginRight}
            y1={yScale(tick)}
            y2={yScale(tick)}
        />
    {/each}

    <!-- TODO Gradient was working and then stopped working -->
    {#if !line}
        {#each areas as area, i}
            <defs>   
                <linearGradient id="area-gradient{i}" x1="0%" x2="0%" y1="0%" y2="100%">
                    <stop offset="0%" stop-color={areaColors[i]} opacity="0.8" />
                    <stop offset="100%" stop-color="white" opacity="0" />
                </linearGradient>
            </defs>
            <path
                fill="url('#area-gradient{i}')"
                d={area}
            />
        {/each}
    {/if}
    {#each lines as stroke, i}
        <path 
            stroke={lineColors[i]}
            stroke-width="2"
            fill="none"
            d={stroke}
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
</svg>

<style>
    .area-chart-svg {
        width: 100%;
        height: 100%;
    }
</style>