<script>
    import { Card } from "$lib/index.js"
    import BarChart from "$lib/components/containers/charts/BarChart.svelte";
    import AreaChart from "$lib/components/containers/charts/AreaChart.svelte";
    import PieChart from "$lib/components/containers/charts/PieChart.svelte";
    import { ChartKeyContainer } from "$lib/index.js";

    export let data = [],
        type = '',
        title = 'Title',
        domain = '',
        range = '',
        tooltipId = '',
        styles = [],
        barColors = ['var(--secondary-600)', 'var(--secondary-base)', 'var(--secondary-400)', 'var(--secondary-300)', 'var(--secondary-200)', 'var(--secondary-100)', 'var(--secondary-050)'],
        areaColors = ['var(--secondary-trans-600)', 'var(--secondary-trans-500)', 'var(--secondary-trans-400)', 'var(--secondary-trans-300)', 'var(--secondary-trans-200)', 'var(--secondary-trans-100)'],
        lineColors = ['var(--secondary-600)', 'var(--secondary-base)', 'var(--secondary-400)', 'var(--secondary-300)', 'var(--secondary-200)', 'var(--secondary-100)'],
        arcColors = ['var(--secondary-600)', 'var(--secondary-base)', 'var(--secondary-400)', 'var(--secondary-300)', 'var(--secondary-200)', 'var(--secondary-100)', 'var(--secondary-050)'],
        vertical = false,
        horizontal = false,
        stacked = false,
        sort = '',
        seriesKey = '',
        ring = false,
        line = false
    
    let chartWidth, stackedData = []
    // pull out the unique series values for the chart key
    let seenValues = []
    for (let item of data) {
        stackedData.push(item[seriesKey])
    }
    for (let [index, value] of stackedData.entries()) {
        if (!seenValues.includes(value)) {
            const obj = {}
            obj[seriesKey] = value
            stackedData[index] = obj
            seenValues.push(value)
        }
    }
    for (let i = stackedData.length - 1; i >= 0; i--) {
        if (typeof stackedData[i] === 'string') stackedData.splice(i, 1)
    }
</script>

<Card
    {title}
    chart
    classes={['neutral-shadow-l']}
    styles={['position: relative', 'width: 100%', 'height: fit-content', 'border: 1px solid var(--neutral-100)', 'border-radius: 24px', 'padding: var(--spacing09)', 'font-weight: 700']}
>
    <slot name='chart-header' />
    <div class='chart-wrapper' bind:clientWidth={chartWidth}>
        {#if type === 'bar'}
            <BarChart 
                {tooltipId}
                {data}
                {domain}
                {range}
                {styles}
                {barColors}
                {vertical}
                {horizontal}
                {stacked}
                {sort}
                {seriesKey}
            />
            {#if stacked}
                <ChartKeyContainer data={stackedData} {seriesKey} colors={barColors} />
            {/if}
        {:else if type === 'area'}
            <AreaChart
                {tooltipId}
                {data}
                {domain}
                {range}
                {seriesKey}
                {styles}
                {areaColors}
                {lineColors}
                {stacked}
                {line}
            />
            {#if stacked}
                <ChartKeyContainer data={stackedData} {seriesKey} colors={barColors} />
            {/if}
        {:else if type === 'pie'}
            <PieChart 
                {tooltipId}
                {data}
                {domain}
                {range}
                {sort}
                {styles}
                {arcColors}
                {ring}
            />
            <ChartKeyContainer 
                {data} 
                {seriesKey} 
                colors={barColors} 
                column={ chartWidth < 500 ? true : false }
            />
        {:else if type === '' || data.length === 0}
            <p>This chart has no data or parameters</p>
        {/if}
    </div>
</Card>

<style>
    .chart-wrapper {
        margin-top: var(--spacing09);
    }
</style>
