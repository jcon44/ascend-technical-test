<script>
    import PageBody from "$lib/components/containers/pages/PageBody.svelte";
    import Page from "$lib/components/containers/pages/Page.svelte";
    import Chart from "$lib/components/containers/charts/Chart.svelte";

    let barData = [
        { x: 'Hospital 1', value: 10 },
        { x: 'Hospital 2', value: 15 },
        { x: 'Hospital 3', value: 13 },
        { x: 'Hospital 4', value: 4 },
        { x: 'Hospital 5', value: 20 },
    ]

    let stackedBarData = [
        { x: 'Jan', name: 'A', value: 40 },
        { x: 'Jan', name: 'B', value: 5 },
        { x: 'Jan', name: 'C', value: 35 },
        { x: 'Feb', name: 'A', value: 50 },
        { x: 'Feb', name: 'B', value: 15 },
        { x: 'Feb', name: 'C', value: 30 },
        { x: 'Mar', name: 'A', value: 35 },
        { x: 'Mar', name: 'B', value: 25 },
        { x: 'Mar', name: 'C', value: 20 },
        { x: 'Apr', name: 'A', value: 20 },
        { x: 'Apr', name: 'B', value: 35 },
        { x: 'Apr', name: 'C', value: 25 },
        { x: 'May', name: 'A', value: 10 },
        { x: 'May', name: 'B', value: 55 },
        { x: 'May', name: 'C', value: 33 },
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
            { date: '2024-01-04', name: 'Company 1', value: 25 },
            { date: '2024-01-25', name: 'Company 1', value: 36 },
            { date: '2024-02-02', name: 'Company 1', value: 32 },
            { date: '2024-02-13', name: 'Company 1', value: 34 },
            { date: '2024-02-29', name: 'Company 1', value: 28 },
            { date: '2024-03-06', name: 'Company 1', value: 67 },
            { date: '2024-03-17', name: 'Company 1', value: 79 },
            { date: '2024-03-23', name: 'Company 1', value: 98 },
            { date: '2024-04-15', name: 'Company 1', value: 95 },
        ],
        [
            { date: '2024-01-04', name: 'Company 2', value: 50 },
            { date: '2024-01-25', name: 'Company 2', value: 46 },
            { date: '2024-02-02', name: 'Company 2', value: 32 },
            { date: '2024-02-13', name: 'Company 2', value: 20 },
            { date: '2024-02-29', name: 'Company 2', value: 13 },
            { date: '2024-03-06', name: 'Company 2', value: 24 },
            { date: '2024-03-17', name: 'Company 2', value: 48 },
            { date: '2024-03-23', name: 'Company 2', value: 57 },
            { date: '2024-04-15', name: 'Company 2', value: 67 },
        ],
        [
            { date: '2024-01-04', name: 'Company 3', value: 34 },
            { date: '2024-01-25', name: 'Company 3', value: 36 },
            { date: '2024-02-02', name: 'Company 3', value: 38 },
            { date: '2024-02-13', name: 'Company 3', value: 43 },
            { date: '2024-02-29', name: 'Company 3', value: 48 },
            { date: '2024-03-06', name: 'Company 3', value: 57 },
            { date: '2024-03-17', name: 'Company 3', value: 58 },
            { date: '2024-03-23', name: 'Company 3', value: 69 },
            { date: '2024-04-15', name: 'Company 3', value: 72 },
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
                    <li><p><code>vertical</code>: (optional) Boolean defaults to false.</p></li>
                    <li><p><code>horizontal</code>: (optional) Boolean defaults to false.</p></li>
                    <li><p><code>stacked</code>: (optional) Boolean defaults to false.</p></li>
                    <li><p><code>sort</code>: (optional) Can be "ascending" or "descending". Defaults to null.</p></li>
                    <li><p><code>barColors</code>: (optional) An array of color values (Default has values for up to 7 bars/series)</p></li>
                </ul>
            </div>
            <div class='simple-v-bar'>
                <Chart 
                    type='bar'
                    vertical
                    sort='descending'
                    title="Simple Vertical Bar Chart"
                    data={barData} 
                    xKey="x" 
                    yKey="value" 
                />
                <details>
                    <summary>Data</summary>
                    <pre>
                        <code>
                        {`
                            let barData = [
                                { x: 'Hospital 1', value: 10 },
                                { x: 'Hospital 2', value: 15 },
                                { x: 'Hospital 3', value: 13 },
                                { x: 'Hospital 4', value: 4 },
                                { x: 'Hospital 5', value: 20 },
                            ]
                        `}
                        </code>
                    </pre>
                </details>
            </div>
        
            <div class='simple-h-bar'>
                <Chart 
                    type='bar'
                    horizontal
                    title="Simple Horizontal Bar Chart"
                    data={barData}
                    xKey="value" 
                    yKey="x" 
                />
                <details>
                    <summary>Data</summary>
                    <pre>
                        <code>
                            {`
                                let barData = [
                                    { x: 'Hospital 1', value: 10 },
                                    { x: 'Hospital 2', value: 15 },
                                    { x: 'Hospital 3', value: 13 },
                                    { x: 'Hospital 4', value: 4 },
                                    { x: 'Hospital 5', value: 20 },
                                ]
                            `}
                        </code>
                    </pre>
                </details>
            </div>

            <div class='stacked-v-bar'>
                <Chart 
                    type='bar'
                    vertical
                    stacked
                    data={stackedBarData} 
                    title="Stacked Vertical Bar Chart"
                    xKey="x" 
                    yKey="value",
                    labelKey="name"
                    seriesKey="name"
                />
                <details>
                    <summary>Data</summary>
                    <pre>
                        <code>
                            {`
                                let stackedBarData = [
                                    { x: 'Jan', name: 'A', value: 40 },
                                    { x: 'Jan', name: 'B', value: 5 },
                                    { x: 'Jan', name: 'C', value: 35 },
                                    { x: 'Feb', name: 'A', value: 50 },
                                    { x: 'Feb', name: 'B', value: 15 },
                                    { x: 'Feb', name: 'C', value: 30 },
                                    { x: 'Mar', name: 'A', value: 35 },
                                    { x: 'Mar', name: 'B', value: 25 },
                                    { x: 'Mar', name: 'C', value: 20 },
                                    { x: 'Apr', name: 'A', value: 20 },
                                    { x: 'Apr', name: 'B', value: 35 },
                                    { x: 'Apr', name: 'C', value: 25 },
                                    { x: 'May', name: 'A', value: 10 },
                                    { x: 'May', name: 'B', value: 55 },
                                    { x: 'May', name: 'C', value: 33 },
                                ]
                            `}     
                        </code>
                    </pre>
                </details>
            </div>

            <div class='stacked-h-bar'>
                <Chart 
                    type='bar'
                    horizontal
                    stacked
                    data={stackedBarData}
                    title="Stacked Horizontal Bar Chart"
                    xKey="value"
                    yKey="x",
                    labelKey="name"
                    seriesKey="name"
                />
                <details>
                    <summary>Data</summary>
                    <pre>
                        <code>
                            {`
                                let stackedBarData = [
                                    { x: 'Jan', name: 'A', value: 40 },
                                    { x: 'Jan', name: 'B', value: 5 },
                                    { x: 'Jan', name: 'C', value: 35 },
                                    { x: 'Feb', name: 'A', value: 50 },
                                    { x: 'Feb', name: 'B', value: 15 },
                                    { x: 'Feb', name: 'C', value: 30 },
                                    { x: 'Mar', name: 'A', value: 35 },
                                    { x: 'Mar', name: 'B', value: 25 },
                                    { x: 'Mar', name: 'C', value: 20 },
                                    { x: 'Apr', name: 'A', value: 20 },
                                    { x: 'Apr', name: 'B', value: 35 },
                                    { x: 'Apr', name: 'C', value: 25 },
                                    { x: 'May', name: 'A', value: 10 },
                                    { x: 'May', name: 'B', value: 55 },
                                    { x: 'May', name: 'C', value: 33 },
                                ]
                            `} 
                        </code>
                    </pre>
                </details>
            </div>

            <div>
                <p class="p">API props unique to Area Charts:</p>
                <ul>
                    <li><p><code>stacked</code>: (optional) Boolean defaults to false.</p></li>
                    <li><p><code>areaColors</code>: (optional) An array of colors for the area fill below the line. Default has enough for 6 areas</p></li>
                    <li><p><code>lineColors</code>: (optional) An array of colors for the line fill. Default has enough for 6 lines</p></li>
                </ul>
            </div>
            <div class='simple-area-chart'>
                <Chart 
                    type='area'
                    data={areaData} 
                    title="Simple Area Chart"
                    xKey="date" 
                    yKey="value" 
                />
                <details>
                    <summary>Data</summary>
                    <pre>
                        <code>
                            {`
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
                            `} 
                        </code>
                    </pre>
                </details>
            </div>

            <div class='stacked-area-chart'>
                <Chart 
                    type='area'
                    data={stackedAreaData} 
                    title="Stacked Area Chart"
                    xKey="date" 
                    yKey="value" 
                    labelKey="name"
                    stacked 
                />
                <details>
                    <summary>Data</summary>
                    <pre>
                        <code>
                            {`
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
                            `} 
                        </code>
                    </pre>
                </details>
            </div>

            <div>
                <p class="p">API props unique to Pie Charts:</p>
                <ul>
                    <li><p><code>arcColors</code>: (optional) An array of colors to define the color of each section. Default has enough for up to 6 sections.</p></li>
                    <li><p><code>ring</code>: (optional) Boolean defaults to false.</p></li>
                    <li><p><code>sort</code>: (optional) Can be "ascending" or "descending". Defaults to null.</p></li>
                </ul>
            </div>
            <div class='pie-chart'>
                <Chart 
                    type='pie'
                    data={pieData} 
                    title="Pie Chart"
                    xKey="name" 
                    yKey="value" 
                    labelKey="name"
                    sort='descending'
                />
                <details>
                    <summary>Data</summary>
                    <pre>
                        <code>
                            {`
                                let pieData = [
                                    { name: 'MCADAMHS', value: 45 },
                                    { name: 'Tri-County', value: 33 },
                                    { name: '317 Board', value: 10 },
                                    { name: 'AAH', value: 13 },
                                    { name: 'Logan-Champaign', value: 65 },
                                ]
                            `}
                        </code>
                    </pre>
                </details>
            </div>

            <div class='ring-chart'>
                <Chart 
                    type='pie'
                    data={pieData} 
                    title="Ring Chart"
                    xKey="name" 
                    yKey="value"
                    labelKey="name"
                    ring
                />
                <details>
                    <summary>Data</summary>
                    <pre>
                        <code>
                            {`let pieData = [
                                    { name: 'MCADAMHS', value: 45 },
                                    { name: 'Tri-County', value: 33 },
                                    { name: '317 Board', value: 10 },
                                    { name: 'AAH', value: 13 },
                                    { name: 'Logan-Champaign', value: 65 },
                                ]`}
                        </code>
                    </pre>
                </details>
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
        min-height: 100vh;
        margin: auto;
        display: flex;
        flex-direction: column;
        gap: var(--spacing15);
    }

    pre {
        white-space: pre-line;
    }

    pre code {
        display: block;
    }

    .simple-v-bar, .simple-h-bar, .stacked-v-bar, .stacked-h-bar, .simple-area-chart, .stacked-area-chart, .pie-chart, .ring-chart {
        width: 100%;
        height: auto;
        margin: auto;

        & .headline-s-m {
            margin-bottom: var(--spacing09);
        }

        & details {
            padding-top: var(--spacing04);
        }
    }

    .simple-h-bar {
        height: 50vh;
    }
</style>