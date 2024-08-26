<script>
     import {
        Axis,
        Bar,
        Bars,
        Chart,
        Highlight,
        Labels,
        Pattern,
        RectClipPath,
        Rule,
        Svg,
        Text,
        Tooltip,
        TooltipItem,
        stackOffsetSeparated,
    } from 'layerchart';
    import { scaleBand } from 'd3-scale';
    import { formatDate } from 'svelte-ux';

    export let data,
		barColors,
		vertical = false,
		horizontal = false,
		stacked = false,
		sort = null,
		domain = 'x',
		range = 'value',
		valueOneLabel,
		valueTwoLabel,
		seriesKey = null,
		tooltipId

    let innerWidth, chartWidth = null, chartHeight = null
    $: width = innerWidth < 768 ? 294 : chartWidth
    $: height = innerWidth < 768 ? 400 : chartHeight || 400
    let xScale, yScale, stack

    // const colorKeys = [...new Set(stackedBarData.map((d) => d.name))];
    // const keyColors = ['var(--secondary-600)', 'var(--secondary-base)', 'var(--secondary-400)']
</script>

<Chart
    {data}
    x={domain}
    xScale={scaleBand().padding(0.4)}
    y={range}
    yDomain={[0, null]}
    yNice
    padding={{ top: 10, left: 1, right: 1, bottom: 28 }}
    tooltip={{ mode: 'bisect-band' }}
>
    <Svg>
        <Axis 
            placement="left" 
            rule
            grid={{
                stroke: "var(--neutral-050)"
            }}
        />
        <Axis
            placement="bottom"
            rule={{ stroke: "var(--neutral-050)"}}
            tickLabelProps={{
                dy: 12,
                fill: "var(--neutral-400)",
                'font-size': '11px',
                class: "font-size"
            }}
        />
        <Bars radius={4} rounded="top" stroke={barColors} strokeWidth={1} fill={barColors} />
        <Highlight area={{ fill: 'var(--secondary-base)' }}>
            <svelte:fragment slot="area" let:area>
                <RectClipPath
                    x={area.x}
                    y={area.y}
                    width={area.width}
                    height={area.height}
                    spring
                >
                    <Bars radius={4} fill="var(--secondary-base)" />
                </RectClipPath>
            </svelte:fragment>
        </Highlight>
    </Svg>
    <Tooltip
        anchor="top"
        x="data"
        y="data"
        header={(data) => data[seriesKey]} 
        let:data
    >
        <TooltipItem label={range} value={data[range]} />
    </Tooltip>
</Chart>

<!-- <div class="chart-height">
    <Chart
        data={stack}
        x="x"
        xScale={scaleBand().paddingInner(0.4).paddingOuter(0.1)}
        r={(d) => d.data.name}
        rScale={scaleOrdinal()}
        rDomain={colorKeys}
        rRange={keyColors}
        y="value"
        yDomain={[0, null]}
        padding={{ left: 16, bottom: 24 }}
    >
        <Svg>
            <Axis placement="left" grid rule />
            <Axis placement="bottom" rule />
            <Bars radius={4} />
        </Svg>
    </Chart>
</div> -->