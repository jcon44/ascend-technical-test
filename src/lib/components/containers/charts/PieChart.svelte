<script>
    import * as d3 from 'd3'
    import { browser } from '$app/environment';
	import ChartTooltip from '$lib/components/containers/labels/ChartTooltip.svelte'

    /**
     *  @param {array} data
     *      data - an array of objects containing the pie chart data.
     *      Each object must have a minimum of two properties – one for the arc groupings and
     *      one for the arc value => { x: <x-value>, y: <y-value>, ... }.
     *      Note that there can be more properties within this object, but they are not accessed
     *      by the chart component.
     * 
     *  @param {string} xKey
     *      xKey - string property that declares the name of the object key used to define the arc groupings.
     * 
     *  @param {string} yKey
     *      yKey - string property that declares the name of the object key used to define
     *      the measured arc value.
     */

    export let data,
            arcColors = [],
            xKey,
            yKey,
            sort = null,
            ring = false,
            tooltipId

    let width = 750
    let height = 400
    let total = 0
    let pie

    for (let item of data) {
        total += item.value
    }

    if (sort === 'ascending') {
        pie = d3.pie()
            .sort((a, b) => d3.ascending(a[yKey], b[yKey]))
            .value((d) => d[yKey])
    } else if (sort === 'descending') {
        pie = d3.pie()
            .sort((a, b) => d3.descending(a[yKey], b[yKey]))
            .value((d) => d[yKey])
    } else {
        pie = d3.pie()
            .sort(null)
            .value((d) => d[yKey])
    }

    const arcPath = d3.arc()
        .innerRadius(ring ? width / 7.5 : 0)
        .outerRadius((Math.min(width, height) / 2) - 1)

    const arcLabel = d3.arc()
        .innerRadius(arcPath.outerRadius()() * 1.15)
        .outerRadius(arcPath.outerRadius()() * 1.15)

    const arcs = pie(data)

    let tooltip, tooltipData = { top: 0, left: 0, xValue: 0, yValue: 0}
    if (browser) {
        tooltip = d3.select(`#${tooltipId}`).style('opacity', 0)
    }

    function enterTooltip(e) {
        tooltip.style('opacity', 1)
    }

    function movingTooltip(e, d) {
        const [x, y] = d3.pointer(e)
        tooltipData.top = e.offsetY - 85
        tooltipData.left = e.offsetX - 10
        tooltipData.xValue = d.data[xKey]
        tooltipData.yValue = d.value
    }

    function leaveTooltip(e) {
        tooltip.style('opacity', 0)
    }
</script>

<div class="svg-container">
    <svg
        class="pie-chart-svg"
        {width}
        {height}
        viewBox="{-width / 2} {-height / 2} {width} {height}"
    >
        <g>
            {#each arcs as slice, i}
                <!-- svelte-ignore a11y-no-static-element-interactions -->
                <path
                    on:mouseenter={enterTooltip}
                    on:mousemove={(e) => movingTooltip(e, slice)}
                    on:mouseleave={leaveTooltip}
                    fill={arcColors[i]}
                    d={arcPath(slice)}
                />
            {/each}
        </g>
    </svg>
    <ChartTooltip {tooltipId} x={tooltipData.left} y={tooltipData.top} xValue={tooltipData.xValue} yValue={tooltipData.yValue} />
</div>

<style>
    .svg-container {
        width: 80%;
        margin: auto;
    }

    .pie-chart-svg {
        width: 100%;
    }
</style>