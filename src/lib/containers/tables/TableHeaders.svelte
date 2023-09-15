<script>
	import { CheckboxInput, TableColumnHeaderCell, sortArray } from '$lib/index.js'

	export let callback, columns, list
</script>


<div class="table-header-row">
	{#each columns as column, columnIndex}
		<TableColumnHeaderCell {callback} {column} {columns} bind:list={list} />
	{/each}
</div>


<style>
	.table-header-row {
		align-items: flex-start;
		border-bottom: var(--neutral-stroke-100-s);
		display: flex;
	}
</style>
