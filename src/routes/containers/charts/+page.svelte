<script>
    import PageBody from "$lib/components/containers/pages/PageBody.svelte";
    import Page from "$lib/components/containers/pages/Page.svelte";
    import BarChart from "$lib/components/containers/charts/BarChart.svelte";
	import AreaChart from "$lib/components/containers/charts/AreaChart.svelte";
	import PieChart from "$lib/components/containers/charts/PieChart.svelte"

    let barData = [
        { x: 'Hospital 1', value: 10 },
        { x: 'Hospital 2', value: 15 },
        { x: 'Hospital 3', value: 13 },
        { x: 'Hospital 4', value: 4 },
        { x: 'Hospital 5', value: 20 },
    ]

    let areaData = [
        { date: '2024-01-04', value: 25 },
        { date: '2024-01-25', value: 36 },
        { date: '2024-02-02', value: 32 },
        { date: '2024-02-13', value: 34 },
        { date: '2024-02-29', value: 28 },
        { date: '2024-03-06', value: 67 },
        { date: '2024-03-17', value: 79 },
        { date: '2024-03-23', value: 98 },
        { date: '2024-04-15', value: 95 },
    ]

    let stackedAreaData = [
        [
            { date: '2024-01-04', value: 25 },
            { date: '2024-01-25', value: 36 },
            { date: '2024-02-02', value: 32 },
            { date: '2024-02-13', value: 34 },
            { date: '2024-02-29', value: 28 },
            { date: '2024-03-06', value: 67 },
            { date: '2024-03-17', value: 79 },
            { date: '2024-03-23', value: 98 },
            { date: '2024-04-15', value: 95 },
        ],
        [
            { date: '2024-01-04', value: 50 },
            { date: '2024-01-25', value: 46 },
            { date: '2024-02-02', value: 32 },
            { date: '2024-02-13', value: 20 },
            { date: '2024-02-29', value: 13 },
            { date: '2024-03-06', value: 24 },
            { date: '2024-03-17', value: 48 },
            { date: '2024-03-23', value: 57 },
            { date: '2024-04-15', value: 67 },
        ],
        [
            { date: '2024-01-04', value: 34 },
            { date: '2024-01-25', value: 36 },
            { date: '2024-02-02', value: 38 },
            { date: '2024-02-13', value: 43 },
            { date: '2024-02-29', value: 48 },
            { date: '2024-03-06', value: 57 },
            { date: '2024-03-17', value: 58 },
            { date: '2024-03-23', value: 69 },
            { date: '2024-04-15', value: 72 },
        ]
    ]

    let pieData = [
        { name: 'MCADAMHS', value: 45 },
        { name: 'Tri-County', value: 33 },
        { name: '317 Board', value: 10 },
        { name: 'AAH', value: 13 },
        { name: 'Logan-Champaign', value: 65 },
    ]

    let width = '100%'
    let height = '100%'
</script>

<Page>
    <PageBody size='full'>
        <div class='chart-container'>
            <div class='simple-v-bar'>
                <h2 class="headline-s-m">Simple Vertical Bar Chart</h2>
                <BarChart 
                    data={barData} 
                    {width} 
                    {height} 
                    xKey="x" 
                    yKey="value" 
                />
            </div>
        
            <div class='simple-h-bar'>
                <h2 class="headline-s-m">Simple Horizontal Bar Chart</h2>
                <BarChart 
                    type="horizontal" 
                    data={barData} 
                    {width} 
                    {height} 
                    xKey="value" 
                    yKey="x" 
                />
            </div>

            <div class='simple-area-chart'>
                <h2 class="headline-s-m">Simple Area Chart</h2>
                <AreaChart 
                    data={areaData} 
                    {width} 
                    {height} 
                    xKey="date" 
                    yKey="value" 
                />
            </div>

            <div class='stacked-area-chart'>
                <h2 class="headline-s-m">Stacked Area Chart</h2>
                <AreaChart 
                    data={stackedAreaData} 
                    {width} 
                    {height} 
                    xKey="date" 
                    yKey="value" 
                    stacked 
                />
            </div>

            <div class='pie-chart'>
                <h2 class="headline-s-m">Ring Chart</h2>
                <PieChart 
                    data={pieData} 
                    arcColors={['var(--primary-base)', 'var(--secondary-base)', 'var(--tertiary-base)', 'var(--error-500)', 'var(--success-500)']} 
                    xKey="name" 
                    yKey="value" 
                />
            </div>

            <div class='ring-chart'>
                <h2 class="headline-s-m">Ring Chart</h2>
                <PieChart 
                    data={pieData} 
                    arcColors={['var(--primary-base)', 'var(--secondary-base)', 'var(--tertiary-base)', 'var(--error-500)', 'var(--success-500)']} 
                    xKey="name" 
                    yKey="value" 
                    ring
                />
            </div>
        </div>
    </PageBody>
</Page>

<style>
    .chart-container {
        width: 100%;
        height: 100vh;
        display: flex;
        flex-direction: column;
        gap: var(--spacing12);
    }

    .simple-v-bar, .simple-h-bar, .simple-area-chart, .stacked-area-chart, .pie-chart, .ring-chart {
        width: 75%;

        & .headline-s-m {
            margin-bottom: var(--spacing09);
        }
    }

    .simple-h-bar {
        height: 50vh;
    }
</style>