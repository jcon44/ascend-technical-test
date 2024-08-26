<script>
    import {
        Axis,
        Bar,
        Bars,
        Area,
        Chart,
        Highlight,
        Labels,
        LinearGradient,
        Pattern,
        RectClipPath,
        Rule,
        Svg,
        Text,
        Tooltip,
        TooltipItem,
        createStackData,
        stackOffsetSeparated,
		AreaStack,
    } from 'layerchart';
    import { scaleBand, scaleOrdinal, scaleTime } from 'd3-scale';
    import {
        Field,
        ToggleGroup,
        ToggleOption,
        formatDate,
        PeriodType,
        Toggle,
        Switch,
    } from 'svelte-ux';

    let areaData = [
		{ date: '2018', series: 'Source', value: 2505 },
		{ date: '2019', series: 'Source', value: 2845 },
		{ date: '2020', series: 'Source', value: 2807 },
		{ date: '2021', series: 'Source', value: 2641 },
		{ date: '2022', series: 'Source', value: 2732 },
		{ date: '2023', series: 'Source', value: 2524 },
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
</script>

<div class="chart-height">
    <Chart
        data={areaData}
        x="date"
        xScale={scaleTime()}
        xNice
        y="value"
        yDomain={[0, null]}
        yNice
        padding={{ left: 16, right: 16, bottom: 20 }}
        tooltip={{ mode: "bisect-x" }}
    >
        <Svg>
            <Axis placement="left" grid rule />
            <Axis
                placement="bottom"
                format={(d) => formatDate(d, PeriodType.Day, { variant: "short" })}
                rule
            />
            <Area
                line={{ stroke: "var(--secondary-base)", strokeWidth: "5", fill: 'none' }}
                fill="var(--secondary-trans-500)"
            />
            <Highlight points lines={{ stroke: "var(--neutral-base)", strokeWidth: '3' }} />
        </Svg>
        <Tooltip x="data" y="data" anchor="top" header={(data) => formatDate(data.date, "eee, MMMM do")} let:data>
            <TooltipItem label="value" value={data.value} />
          </Tooltip>
    </Chart>
</div>

<!-- <div class="chart-height">
    <Chart
        data={stackedAreaData}
        x="date"
        xScale={scaleTime()}
        y="value"
    >
        <Svg>
            <Axis placement="left" grid rule />
            <Axis 
                placement="bottom"
                format={(d) => formatDate(d, PeriodType.Day, { variant: "short" })}
                rule
            />
            <AreaStack />
        </Svg>
    </Chart>
</div> -->

<style>
    .chart-height {
        height: 400px;
    }
</style>