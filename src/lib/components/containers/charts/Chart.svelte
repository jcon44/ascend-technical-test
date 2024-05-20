<script>
    import BarChart from "$lib/components/containers/charts/BarChart.svelte";
    import AreaChart from "$lib/components/containers/charts/AreaChart.svelte";
    import PieChart from "$lib/components/containers/charts/PieChart.svelte";

    export let data,
        type,
        title,
        xKey,
        yKey,
        styles,
        barColors,
        areaColors,
        lineColors,
        arcColors,
        vertical,
        horizontal,
        stacked,
        seriesKey,
        ring
</script>

{#if type === 'bar'}
    <BarChart 
        {data}
        {title}
        {xKey}
        {yKey}
        {styles}
        {barColors}
        {vertical}
        {horizontal}
        {stacked}
        {seriesKey}
    />
{:else if type === 'area'}
    <AreaChart
        {data}
        {title}
        {xKey}
        {yKey}
        {styles}
        {areaColors}
        {lineColors}
        {stacked}
    />
{:else if type === 'pie'}
    <PieChart 
        {data}
        {title}
        {xKey}
        {yKey}
        {styles}
        {arcColors}
        {ring}
    />
{/if}