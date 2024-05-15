<script>
    import PageBody from "$lib/components/containers/pages/PageBody.svelte";
    import Page from "$lib/components/containers/pages/Page.svelte";
    import BarChart from "$lib/components/containers/charts/BarChart.svelte";
	import AreaChart from "$lib/components/containers/charts/AreaChart.svelte";
	import PieChart from "$lib/components/containers/charts/PieChart.svelte";

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
</script>

<Page>
    <PageBody size='full'>
        <div class="header">
            <h2 class="headline-l-xl">Charts</h2>
            <p class="p">Each chart component shares the following API for data and style:</p>
            <ul>
                <li><p><code>data</code>: An array of objects containing the chart data.</p></li>
                <li><p><code>xKey</code>: A string defining the data object key for the base axis or measurement for the chart data.</p></li>
                <li><p><code>yKey</code>: A string defining the data object key for the value axis or measurement for the chart data.</p></li>
                <li><p><code>styles</code>: (optional) An array of CSS styles that style the chart frame.</p></li>
                <li><p><code>title</code>: (optional) A string representing the chart title.</p></li>
            </ul>
            <p>Additionally, each chart has a slot for header content and footer content. Suitable for buttons, text, or other components.</p>
        </div>
        <div class='chart-container'>
            <div>
                <p class="p">API props unique to Bar Charts:</p>
                <ul>
                    <li><p><code>type</code>: (optional) Defaults to "vertical". Can be the following values: "vertical", "horizontal", "stacked-vertical", "stacked-horizontal".</p></li>
                    <li><p><code>barColors</code>: (optional) An array of color values </p></li>
                </ul>
            </div>
            <div class='simple-v-bar'>
                <BarChart 
                    data={barData} 
                    title="Simple Vertical Bar Chart"
                    xKey="x" 
                    yKey="value" 
                />
            </div>
        
            <div class='simple-h-bar'>
                <BarChart 
                    type="horizontal" 
                    title="Simple Horizontal Bar Chart"
                    data={barData}
                    xKey="value" 
                    yKey="x" 
                />
            </div>

            <div>
                <p class="p">API props unique to Area Charts:</p>
                <ul>
                    <li><p><code>stacked</code>: (optional) Boolean defaults to false.</p></li>
                    <li><p><code>areaColors</code>: (optional) An array of colors for the area fill below the line.</p></li>
                    <li><p><code>lineColors</code>: (optional) An array of colors for the line fill.</p></li>
                </ul>
            </div>
            <div class='simple-area-chart'>
                <AreaChart 
                    data={areaData} 
                    title="Simple Area Chart"
                    xKey="date" 
                    yKey="value" 
                />
            </div>

            <div class='stacked-area-chart'>
                <AreaChart 
                    data={stackedAreaData} 
                    title="Stacked Area Chart"
                    xKey="date" 
                    yKey="value" 
                    stacked 
                />
            </div>

            <div>
                <p class="p">API props unique to Pie Charts:</p>
                <ul>
                    <li><p><code>arcColors</code>: (optional) An array of colors to define the color of each section.</p></li>
                    <li><p><code>ring</code>: (optional) Boolean defaults to false.</p></li>
                </ul>
            </div>
            <div class='pie-chart'>
                <PieChart 
                    data={pieData} 
                    title="Pie Chart"
                    arcColors={['var(--primary-base)', 'var(--secondary-base)', 'var(--tertiary-base)', 'var(--error-500)', 'var(--success-500)']} 
                    xKey="name" 
                    yKey="value" 
                />
            </div>

            <div class='ring-chart'>
                <PieChart 
                    data={pieData} 
                    title="Ring Chart"
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
    .header {
        width: 75%;
        margin: auto;

        & h2 {
            padding-bottom: var(--spacing09);
        }
    }

    li {
        padding-bottom: var(--spacing09);
        list-style: none;
    }

    code {
        font: 16px monospace;
        background-color: lightgray;
        padding: var(--spacing02);
    }

    .p {
        font-size: 20px;
        padding-bottom: var(--spacing09);
    }

    .chart-container {
        width: 75%;
        height: 100vh;
        margin: auto;
        display: flex;
        flex-direction: column;
        gap: var(--spacing12);
    }

    .simple-v-bar, .simple-h-bar, .simple-area-chart, .stacked-area-chart, .pie-chart, .ring-chart {
        width: 100%;
        height: auto;
        margin: auto;

        & .headline-s-m {
            margin-bottom: var(--spacing09);
        }
    }

    .simple-h-bar {
        height: 50vh;
    }
</style>