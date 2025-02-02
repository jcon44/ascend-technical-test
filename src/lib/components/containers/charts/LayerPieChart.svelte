<script>
	import { Axis, Pie, Chart, Highlight, Labels, LinearGradient, Pattern, RectClipPath, Rule, Svg, Text, Tooltip, TooltipItem, createStackData, stackOffsetSeparated } from 'layerchart'
	import { scaleBand, scaleOrdinal, scaleLinear } from 'd3-scale'
	import { Field, ToggleGroup, ToggleOption, formatDate, PeriodType, Toggle, Switch } from 'svelte-ux'

	let pieData = [
		{ name: 'MCADAMHS', value: 45 },
		{ name: 'Tri-County', value: 33 },
		{ name: '317 Board', value: 10 },
		{ name: 'AAH', value: 13 },
		{ name: 'Logan-Champaign', value: 65 },
	]

	const colorKeys = [...new Set(pieData.map((d) => d.name))]
	const keyColors = ['var(--secondary-600)', 'var(--secondary-base)', 'var(--secondary-400)', 'var(--secondary-300)', 'var(--secondary-200)']
</script>

<div class="chart-height">
	<Chart
		data={pieData}
		x="name"
		r="value"
		rDomain={colorKeys}
		rRange={keyColors}
	>
		<Svg>
			<Pie />
		</Svg>
	</Chart>
</div>

<style>
	.chart-height {
		height: 400px;
	}
</style>
