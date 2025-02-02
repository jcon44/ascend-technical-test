<script>
	export let value = 'avg',
		position
</script>

<div
	class="rule-tip"
	style="top:{position - 23}px"
>
	<p>{value === 'avg' ? 'Avg.' : value}</p>
</div>

<style>
	.rule-tip {
		width: fit-content;
		padding: 0 var(--spacing02);
		background-color: var(--neutral-400);
		border-radius: 4px;
		position: absolute;
		right: 0;
		top: 50px;
		opacity: 1;

		& p {
			font-size: 11px;
			color: white;
		}
	}
</style>
