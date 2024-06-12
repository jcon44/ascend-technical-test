<script>
    import * as d3 from 'd3'

    export let data,
            styles = [],
            arcColors = [],
            xKey,
            yKey,
            sort = null,
            ring = false

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
        .innerRadius(ring ? width / 5.5 : 0)
        .outerRadius((Math.min(width, height) / 2) - 1)

    const arcLabel = d3.arc()
        .innerRadius(arcPath.outerRadius()() * 1.15)
        .outerRadius(arcPath.outerRadius()() * 1.15)

    const arcs = pie(data)
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
                <path
                    fill={arcColors[i]}
                    d={arcPath(slice)}
                />
    
                <!-- <text
                    class="label-text"
                    fill="gray"
                    transform="translate({arcLabel.centroid(slice)})"
                    text-anchor="middle"
                >
                    {slice[yKey]}
                </text> -->
            {/each}
        </g>
    </svg>
</div>

<style>
    .svg-container {
        width: 80%;
        margin: auto;
    }

    .pie-chart-svg {
        width: 100%;
    }

    .label-text {
        font-size: 24px;
    }
</style>