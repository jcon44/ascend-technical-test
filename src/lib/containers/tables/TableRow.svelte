<script>
	import { TableCell } from '$lib/index.js'

	export let callback, columns, list, rowIndex

	$: row = list[rowIndex]
</script>


<div class="table-body-row">
	{#each columns as column, columnIndex}
		<TableCell {callback} bind:column={column} bind:row={row} />
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
