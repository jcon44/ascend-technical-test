<script>
	import { CheckboxInput, TableColumnHeaderCell, sortArray } from '$lib/index.js'

	export let columns, list
</script>

<div class='table-header-container'>
	<div class="table-headers-row">
		{#each columns as column, index}
			<TableColumnHeaderCell {column} {columns} {index} {list} />
		{/each}
	</div>
</div>

<style>
	.table-headers-row {
		align-items: center;
		border-bottom: var(--spacing01) solid var(--neutral-000);
		display: flex;
		justify-content: space-between;
		width: 100%;
	}
	div[class^='column'] {
		overflow-x: hidden;
	}
</style>
