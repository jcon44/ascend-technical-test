<script>
	import { FilterLabel } from '$lib/index.js'
	export let filters = []
</script>

<div class="filter-container">
	<p class="body-bold-xs">Displaying results for</p>
	{#each filters as filter (filter.tooltip)}
		<FilterLabel {filter} />
	{/each}
</div>

<style>
	.filter-container {
		display: flex;
		gap: var(--spacing06);
		align-items: center;
		color: var(--neutral-400);
		flex-wrap: wrap;
	}
</style>
