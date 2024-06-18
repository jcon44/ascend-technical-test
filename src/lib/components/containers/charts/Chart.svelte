<script>
    import { Card } from "$lib/index.js"
    import BarChart from "$lib/components/containers/charts/BarChart.svelte";
    import AreaChart from "$lib/components/containers/charts/AreaChart.svelte";
    import PieChart from "$lib/components/containers/charts/PieChart.svelte";
    import { ChartKeyContainer } from "$lib/index.js";

    export let data,
        type,
        title,
        xKey,
        yKey,
        labelKey,
        tooltipId,
        styles,
        barColors = ['var(--secondary-600)', 'var(--secondary-base)', 'var(--secondary-400)', 'var(--secondary-300)', 'var(--secondary-200)', 'var(--secondary-100)', 'var(--secondary-050)'],
        areaColors = ['var(--secondary-trans-600)', 'var(--secondary-trans-500)', 'var(--secondary-trans-400)', 'var(--secondary-trans-300)', 'var(--secondary-trans-200)', 'var(--secondary-trans-100)'],
        lineColors = ['var(--secondary-600)', 'var(--secondary-base)', 'var(--secondary-400)', 'var(--secondary-300)', 'var(--secondary-200)', 'var(--secondary-100)'],
        arcColors = ['var(--secondary-600)', 'var(--secondary-base)', 'var(--secondary-400)', 'var(--secondary-300)', 'var(--secondary-200)', 'var(--secondary-100)', 'var(--secondary-050)'],
        vertical,
        horizontal,
        stacked,
        sort,
        seriesKey,
        ring,
        line
    
    let chartWidth
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
                {xKey}
                {yKey}
                {styles}
                {barColors}
                {vertical}
                {horizontal}
                {stacked}
                {sort}
                {seriesKey}
            />
            {#if stacked}
                <ChartKeyContainer {data} {labelKey} colors={barColors} />
            {/if}
        {:else if type === 'area'}
            <AreaChart
                {tooltipId}
                {data}
                {xKey}
                {yKey}
                {seriesKey}
                {styles}
                {areaColors}
                {lineColors}
                {stacked}
                {line}
            />
            {#if stacked}
                <ChartKeyContainer {data} {xKey} colors={barColors} />
            {/if}
        {:else if type === 'pie'}
            <PieChart 
                {tooltipId}
                {data}
                {xKey}
                {yKey}
                {sort}
                {styles}
                {arcColors}
                {ring}
            />
            <ChartKeyContainer 
                {data} 
                {labelKey} 
                colors={barColors} 
                column={ chartWidth < 500 ? true : false }
            />
        {/if}
    </div>
</Card>

<style>
    .chart-wrapper {
        margin-top: var(--spacing09);
    }
</style>