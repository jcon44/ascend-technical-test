<script>
	import { TableCell } from '$lib/index.js'

	export let list, rowIndex, columns

	$: row = list[rowIndex]
</script>


<div class="table-body-row">
	{#each columns as column, columnIndex}
		<TableCell bind:column={column} columnIndex={columnIndex} bind:row={row} />
	{/each}
</div>


<style>
	.table-body-row {
		align-items: flex-start;
		border-bottom: var(--neutral-stroke-100-s);
		display: flex;
	}
</style>
