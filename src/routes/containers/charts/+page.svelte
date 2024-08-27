<script>
	import GeoChart from '$lib/components/containers/charts/GeoChart.svelte'
	import LayerAreaChart from '$lib/components/containers/charts/LayerAreaChart.svelte'
	import LayerBarChart from '$lib/components/containers/charts/LayerBarChart.svelte'
	import LayerPieChart from '$lib/components/containers/charts/LayerPieChart.svelte'
	import SelectorInput from '$lib/components/inputs/selectors/SelectorInput.svelte'
	import { Chart, Page, PageBody } from '$lib/index.js'
	import { env } from '$env/dynamic/public'

	let barData = [
		{ x: 'Hospital 1', series: 'Source', value: 10 },
		{ x: 'Hospital 2', series: 'Source', value: 15 },
		{ x: 'Hospital 3', series: 'Source', value: 13 },
		{ x: 'Hospital 4', series: 'Source', value: 4 },
		{ x: 'Hospital 5', series: 'Source', value: 20 },
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
		{ date: '2018', series: 'Source', value: 2505 },
		{ date: '2019', series: 'Source', value: 2845 },
		{ date: '2020', series: 'Source', value: 2807 },
		{ date: '2021', series: 'Source', value: 2641 },
		{ date: '2022', series: 'Source', value: 2732 },
		{ date: '2023', series: 'Source', value: 2524 },
	]

	let citData = [
		{ date: '2023-01-01', name: 'CIT', value: 14},
		{ date: '2023-02-01', name: 'CIT', value: 9},
		{ date: '2023-03-01', name: 'CIT', value: 15},
		{ date: '2023-04-01', name: 'CIT', value: 19},
		{ date: '2023-05-01', name: 'CIT', value: 31},
		{ date: '2023-06-01', name: 'CIT', value: 17},
		{ date: '2023-07-01', name: 'CIT', value: 23},
		{ date: '2023-08-01', name: 'CIT', value: 34},
		{ date: '2023-09-01', name: 'CIT', value: 20},
		{ date: '2023-10-01', name: 'CIT', value: 30},
		{ date: '2023-11-01', name: 'CIT', value: 27},
		{ date: '2023-12-01', name: 'CIT', value: 23},
	]

	let realStacked = [
		{ date: '2018', name: 'Logan', value: 12},
		{ date: '2019', name: 'Logan', value: 9},
		{ date: '2020', name: 'Logan', value: 8},
		{ date: '2021', name: 'Logan', value: 7},
		{ date: '2022', name: 'Logan', value: 8},
		{ date: '2023', name: 'Logan', value: 10},
		{ date: '2018', name: 'Champaign', value: 6},
		{ date: '2019', name: 'Champaign', value: 10},
		{ date: '2020', name: 'Champaign', value: 5},
		{ date: '2021', name: 'Champaign', value: 4},
		{ date: '2022', name: 'Champaign', value: 7},
		{ date: '2023', name: 'Champaign', value: 8},
	]

	let stackedAreaData = [
		{ date: '2024-01-04', name: 'Company 1', value: 25 },
		{ date: '2024-01-04', name: 'Company 2', value: 50 },
		{ date: '2024-01-04', name: 'Company 3', value: 12 },
		{ date: '2024-01-25', name: 'Company 1', value: 22 },
		{ date: '2024-01-25', name: 'Company 2', value: 53 },
		{ date: '2024-01-25', name: 'Company 3', value: 14 },
		{ date: '2024-02-02', name: 'Company 1', value: 20 },
		{ date: '2024-02-02', name: 'Company 2', value: 55 },
		{ date: '2024-02-02', name: 'Company 3', value: 16 },
		{ date: '2024-02-13', name: 'Company 1', value: 24 },
		{ date: '2024-02-13', name: 'Company 2', value: 60 },
		{ date: '2024-02-13', name: 'Company 3', value: 18 },
		{ date: '2024-02-29', name: 'Company 1', value: 28 },
		{ date: '2024-02-29', name: 'Company 2', value: 62 },
		{ date: '2024-02-29', name: 'Company 3', value: 16 },
		{ date: '2024-03-06', name: 'Company 1', value: 30 },
		{ date: '2024-03-06', name: 'Company 2', value: 65 },
		{ date: '2024-03-06', name: 'Company 3', value: 12 },
		{ date: '2024-03-17', name: 'Company 1', value: 34 },
		{ date: '2024-03-17', name: 'Company 2', value: 66 },
		{ date: '2024-03-17', name: 'Company 3', value: 10 },
		{ date: '2024-03-23', name: 'Company 1', value: 38 },
		{ date: '2024-03-23', name: 'Company 2', value: 66 },
		{ date: '2024-03-23', name: 'Company 3', value: 13 },
		{ date: '2024-04-15', name: 'Company 1', value: 33 },
		{ date: '2024-04-15', name: 'Company 2', value: 64 },
		{ date: '2024-04-15', name: 'Company 3', value: 15 },
	]

	let pieData = [
		{ name: 'MCADAMHS', value: 45 },
		{ name: 'Tri-County', value: 33 },
		{ name: '317 Board', value: 10 },
		{ name: 'AAH', value: 13 },
		{ name: 'Logan-Champaign', value: 65 },
	]

	let firstGeoData = [
            { lat: 39.99301430308352, lng: -83.07889125866988 },
            { lat: 39.95803726523056, lng: -83.01417504517886 },
            { lat: 39.96951622358259, lng: -82.96960197216313 },
            { lat: 39.99467810445367, lng: -83.00654358750577 },
    ]

	let secondGeoData = [
		{ 
			"name": "Miami Valley Hospital",
			"count": 15,
			lat: 39.993651990846004, 
			lng:  -83.03040957396438 
		},
		{ 	
			"name": "Miami Valley Hospital",
			"count": 15,
			lat: 39.99191506361452, 
			lng: -83.01083640022647 
		},
		{ 
			"name": "Miami Valley Hospital",
			"count": 15,
			lat: 39.99648321748808, 
			lng: -83.00200723755758 
		},
		{ 
			"name": "Miami Valley Hospital",
			"count": 15,
			lat: 39.97843952972203, 
			lng: -83.01152342283109 
		},
		{ 
			"name": "Miami Valley Hospital",
			"count": 15,
			lat: 40.017166463612554, 
			lng: -82.99771283044907 
		},
	]

	let markers = {
		lhn: 'https://local-help-now.s3.us-east-2.amazonaws.com/Pin.svg'
		// lhn: '/src/lib/assets/images/Pin.svg'
	}

	let realData = [
		{
			"full_address": "1 Wyoming Street, Dayton, OH 45409",
			"street": "1 Wyoming Street",
			"city": "Dayton",
			"state": "OH",
			"zip": "45409",
			"lat": 39.74468936344823,
			"lng": -84.18755780100692,
			"name": "Miami Valley Hospital",
			"count": 15,
			"type": "hospital",
			"url": "https://www.example.com"
		},
		{
			"full_address": "405 W Grand Ave, Dayton, OH 45405",
			"street": "405 W Grand Ave",
			"city": "Dayton",
			"state": "OH",
			"zip": "45405",
			"lat": 39.770033831326764,
			"lng": -84.2026657451856,
			"name": "Kettering Health - Dayton",
			"count": 10,
			"type": "hospital",
			"url": "https://www.example.com"
		},
		{
			"full_address": "3535 Southern Blvd, Kettering, OH 45429",
			"street": "3535 Southern Blvd",
			"city": "Kettering",
			"state": "OH",
			"zip": "45429",
			"lat": 39.69714763919204,
			"lng": -84.19111608751633,
			"name": "Kettering Health - Main Campus",
			"count": 1,
			"type": "hospital",
			"url": "https://www.example.com"
		},
		{
			"full_address": "3417 Marshall Rd, Dayton, OH 45429",
			"street": "3417 Marshall Rd",
			"city": "Dayton",
			"state": "OH",
			"zip": "45429",
			"lat": 39.69683452972968,
			"lng": -84.14159441635228,
			"name": "Eastway Behavioral Health",
			"count": 407,
			"type": "provider",
			"url": "https://www.example.com"
		},
		{
			"full_address": "3095 Kettering Blvd, Moraine, OH 45439",
			"street": "3095 Kettering Blvd",
			"city": "Moraine",
			"state": "OH",
			"zip": "45439",
			"lat": 39.70618516837155,
			"lng": -84.20367446053149,
			"name": "South Community",
			"count": 868,
			"type": "provider",
			"url": "https://www.example.com"
		},
		{
			"full_address": "707 S Edwin C Moses Blvd, Dayton, OH 45417",
			"street": "707 S Edwin C Moses Blvd",
			"city": "Dayton",
			"state": "OH",
			"zip": "45417",
			"lat": 39.7467775042141,
			"lng": -84.19794147402233,
			"name": "Samaritan Behavioral Health",
			"count": 2,
			"type": "provider",
			"url": "https://www.example.com"
		},
		{
			"full_address": "11 W Monument Ave, Dayton, OH 45402",
			"street": "11 W Monument Ave",
			"city": "Dayton",
			"state": "OH",
			"zip": "45402",
			"lat": 39.76412035481474,
			"lng": -84.1935038163499,
			"name": "Places Inc",
			"count": 64,
			"type": "provider",
			"url": "https://www.example.com"
		},
		{
			"full_address": "330 W 2nd St, Dayton, OH 45422",
			"street": "330 W 2nd St",
			"city": "Dayton",
			"state": "OH",
			"zip": "45422",
			"lat": 39.75987081414062,
			"lng": -84.19777583169365,
			"name": "Montgomery County Jail",
			"count": 58,
			"type": "jail",
			"url": "https://www.example.com"
		}
	]

	$: geoData = 'secondGeoData'
</script>

<Page>
	<PageBody size="full">
		<!-- <div class="header">
			<h2 class="headline-l-xl">Charts</h2>
			<p class="p">Each chart component shares the following API for data and style:</p>
			<ul>
				<li><p><code>data</code>: An array of objects containing the chart data.</p></li>
				<li><p><code>domain</code>: A string defining the data object key for the base axis or measurement for the chart data.</p></li>
				<li><p><code>range</code>: A string defining the data object key for the value axis or measurement for the chart data.</p></li>
				<li><p><code>styles</code>: (optional) An array of CSS styles that style the chart frame.</p></li>
				<li><p><code>title</code>: (optional) A string representing the chart title.</p></li>
			</ul>
			<p>Additionally, each chart has a slot for header content and footer content. Suitable for buttons, text, or other components.</p>
		</div> -->
		<div class="chart-container">
			<div class="simple-v-bar">
				<Chart
					tooltipId="simple-v"
					type="bar"
					vertical
					sort="descending"
					title="Simple Vertical Bar Chart"
					data={barData}
					domain="x"
					range="value"
					seriesKey="series"
				>
					<div slot="chart-header" style="margin-top: var(--spacing09)">
						<SelectorInput 
							id="bar-selector"
							label="Random Selector"
						/>
					</div>
				</Chart>
			</div>

			<!-- <div class="simple-h-bar">
				<Chart
					tooltipId="simple-h"
					type="bar"
					horizontal
					title="Simple Horizontal Bar Chart"
					data={barData}
					domain="value"
					range="x"
				/>
			</div>
			<div class="stacked-v-bar">
				<Chart
					tooltipId="stacked-v"
					type="bar"
					vertical
					stacked
					data={stackedBarData}
					title="Stacked Vertical Bar Chart"
					domain="x"
					range="value"
					,
					labelKey="name"
					seriesKey="name"
				/>
			</div>
			<div class="stacked-h-bar">
				<Chart
					tooltipId="stacked-h"
					type="bar"
					horizontal
					stacked
					data={stackedBarData}
					title="Stacked Horizontal Bar Chart"
					domain="value"
					range="x"
					,
					labelKey="name"
					seriesKey="name"
				/>
			</div> -->
			<div>
			<div class="simple-area-chart">
				<Chart
					tooltipId="area"
					type="area"
					data={citData}
					title="Simple Area Chart"
					domain="date"
					range="value"
					valueOneLabel="date"
					valueTwoLabel="value"
					monthOnly
					seriesKey="series"
				/>
			</div>
			<div class="stacked-area-chart">
				<Chart
					tooltipId="stacked-area"
					type="area"
					data={realStacked}
					title="Stacked Area Chart"
					domain="date"
					range="value"
					seriesKey="name"
					labelKey="name"
					valueOneLabel="date"
					valueTwoLabel="value"
					yearOnly
					stacked
				/>
			</div>
			<div class="pie-chart">
				<Chart
					tooltipId="pie"
					type="pie"
					data={pieData}
					title="Pie Chart"
					domain="name"
					range="value"
					seriesKey="name"
					sort="descending"
				/>
			</div>
			<div class="ring-chart">
				<Chart
					tooltipId="ring"
					type="pie"
					data={pieData}
					title="Ring Chart"
					domain="name"
					range="value"
					seriesKey="name"
					ring
				/>
			</div> 
			<div class="geo-chart">
				<Chart 
					title="Map With Multiple Markers"
					type="geo"
					pillText="Total Number of Claims"
					pillKey="count"
					addressKey="full_address"
					infoTitleKey="name"
					data={geoData === 'secondGeoData' ? secondGeoData : realData}
					markers={markers}
				>
					<div slot="chart-header" style="margin-top: var(--spacing09)">
						<SelectorInput 
							id="bar-selector"
							label="Random Selector"
							optionList={[
								'firstGeoData',
								'secondGeoData'
							]}
							bind:selectedValue={geoData}
						/>
					</div>
				</Chart>
			</div>
		</div>
	</PageBody>
</Page>

<style>
	.chart-container {
		width: 100%;
		min-height: 100vh;
		margin: auto;
		display: flex;
		flex-direction: column;
		gap: var(--spacing15);
	}

	.simple-v-bar,
	.simple-h-bar,
	.stacked-v-bar,
	.stacked-h-bar,
	.simple-area-chart,
	.stacked-area-chart,
	.pie-chart,
	.ring-chart,
	.geo-chart {
		width: 100%;
		height: 650px;
		margin: auto;
		margin-bottom: var(--spacing13);

		& .headline-s-m {
			margin-bottom: var(--spacing09);
		}

		& details {
			padding-top: var(--spacing04);
		}
	}

	.ring-chart {
		display: flex;
		gap: var(--spacing09);
	}

	.simple-h-bar {
		height: 50vh;
	}

	.geo-chart {
		height: 800px;
	}
</style>
