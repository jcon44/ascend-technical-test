<script>
    import { Card } from "$lib/index.js"
    import BarChart from "$lib/components/containers/charts/BarChart.svelte";
    import AreaChart from "$lib/components/containers/charts/AreaChart.svelte";
    import PieChart from "$lib/components/containers/charts/PieChart.svelte";
    import { ChartKeyContainer } from "$lib/index.js";
	import { afterUpdate, onMount } from "svelte"

    export let data = [],
        type = '',
        title = 'Title',
        domain = '',
        range = '',
        fullDate = false,
        yearOnly = false,
        monthOnly = false,
        monthDay = false,
        monthYear = false,
        tooltipId = '',
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
        line = false,
        singleSelector = false,
        singleCard = false,
        singleDoubleSlot = false,
        stackedSelector = false,
        stackedCard = false,
        stackedDoubleSlot = false
    
    let chartWidth, chartHeight, keyContainerKeys = []
    afterUpdate(() => {
        // pull out the unique series values for the chart key
        let seenValues = []
        keyContainerKeys.length = 0
        for (let item of data) {
            keyContainerKeys.push(item[seriesKey])
        }
        for (let [index, value] of keyContainerKeys.entries()) {
            if (!seenValues.includes(value)) {
                const obj = {}
                obj[seriesKey] = value
                keyContainerKeys[index] = obj
                seenValues.push(value)
            }
        }
        for (let i = keyContainerKeys.length - 1; i >= 0; i--) {
            if (typeof keyContainerKeys[i] === 'string') keyContainerKeys.splice(i, 1)
        }
    })
</script>

<Card
    {title}
    chart
    classes={['neutral-shadow-l']}
    styles={['position: relative', `max-width: ${type === 'pie' ? '354px' : '100%' }`, `height: 100%`, 'border: 1px solid var(--neutral-100)', 'border-radius: 24px', 'padding: var(--spacing09)', 'font-weight: 700']}
>
    <slot name='chart-header' />
    <div class='chart-wrapper { singleSelector ? 'single-selector-slot' : '' } { singleCard ? 'single-card-slot' : '' } { singleDoubleSlot ? 'single-double-slot' : '' } { stacked ? 'stacked-height' : '' } { stackedSelector ? 'stacked-selector-slot' : '' } { stackedCard ? 'stacked-card-slot' : '' } { stackedDoubleSlot ? 'stacked-double-slot' : '' }' bind:clientWidth={chartWidth} bind:clientHeight={chartHeight}>
        {#if type === 'bar'}
            <BarChart 
                {tooltipId}
                {data}
                {domain}
                {range}
                {barColors}
                {vertical}
                {horizontal}
                {stacked}
                {sort}
                {seriesKey}
                {chartHeight}
                {chartWidth}
            />
            {#if stacked}
                <ChartKeyContainer 
                    data={keyContainerKeys} 
                    {seriesKey} 
                    colors={barColors} 
                    column={ chartWidth < 500 ? true : false } 
                />
            {/if}
        {:else if type === 'area'}
            <AreaChart
                {tooltipId}
                {data}
                {domain}
                {range}
                {seriesKey}
                {areaColors}
                {lineColors}
                {stacked}
                {line}
                {fullDate}
                {yearOnly}
                {monthOnly}
                {monthDay}
                {monthYear}
                {chartWidth}
                {chartHeight}
            />
            {#if stacked}
                <ChartKeyContainer 
                    data={keyContainerKeys} 
                    {seriesKey} 
                    colors={lineColors} 
                    column={ chartWidth < 500 ? true : false } 
                />
            {/if}
        {:else if type === 'pie'}
            <PieChart 
                {tooltipId}
                {data}
                {domain}
                {range}
                {sort}
                {arcColors}
                {ring}
                height={280}
            />
            <ChartKeyContainer 
                {data} 
                {seriesKey} 
                colors={arcColors} 
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
        height: calc(100% - var(--spacing09));
    }

    .single-selector-slot {
        height: calc(100% - 123px);
    }

    .single-card-slot {
        height: calc(100% - 185px);
    }

    .single-double-slot {
        height: calc(100% - 260px);
    }

    .stacked-height {
        height: calc(100% - 45px);
    }

    .stacked-selector-slot {
        height: calc(100% - 178px);
    }

    .stacked-card-slot {
        height: calc(100% - 230px);
    }

    .stacked-double-slot {
        height: calc(100% - 310px);
    }
</style>
