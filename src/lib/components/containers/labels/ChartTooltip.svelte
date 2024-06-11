<script>
	export let x, y
</script>

<g class="tooltip">
	<text
		x={x + 5}
		y={y + 5}
	>
		{x}
	</text>
	<text
		x={x - 5}
		y={y - 5}
	>
		{y}
	</text>
</g>

<style>
	.tooltip {
		position: absolute;
	}
</style>
