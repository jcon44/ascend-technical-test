<script>
	import { TableCell } from '$lib/index.js'

	export let columns, list, rowIndex

	$: row = list[rowIndex]
</script>

<div class="table-body-row">
	{#each columns as column}
		<TableCell
			bind:column
			bind:row
		/>
	{/each}
</div>

<style>
	.table-body-row {
		align-items: flex-start;
		border-bottom: var(--neutral-stroke-100-s);
		display: flex;
	}
	.table-body-row:last-child {
		border-bottom: none;
	}
</style>
