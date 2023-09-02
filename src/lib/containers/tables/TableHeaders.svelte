<script>
	import { CheckboxInput, TableColumnHeaderCell, sortArray } from '$lib/index.js'

	export let columns, list
</script>

<div class="table-header-row">
	{#each columns as column, columnIndex}
		<TableColumnHeaderCell cellData={{ column, columns, columnIndex, list }} />
	{/each}
</div>

<style>
	.table-header-row {
		align-items: flex-start;
		border-bottom: var(--spacing01) solid var(--neutral-000);
		display: flex;
	}
</style>
