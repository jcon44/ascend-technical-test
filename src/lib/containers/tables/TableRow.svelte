<script>
	import { TableCell } from '$lib/index.js'

	export let list, rowIndex, columns

	$: row = list[rowIndex]
</script>

<div class="table-body-row">
	{#each columns as column, columnIndex}
		<TableCell cellData={{ column, columnIndex, row }} />
	{/each}
</div>

<style>
	.table-body-row {
		align-items: flex-start;
		border-bottom: var(--spacing01) solid var(--neutral-000);
		display: flex;
	}
</style>
