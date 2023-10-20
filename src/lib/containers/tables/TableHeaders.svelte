<script>
	import { TableColumnHeaderCell, sortArray } from '$lib/index.js'

	export let callback, columns, list

	const sortMap = {}
	Object.values(columns).forEach(column => {
		if (column.key !== undefined) sortMap[column.key] = ''
	})

	function sortTable(columnKey, columnType) {
		// save the last sort order for this column
		const previousSortOrder = sortMap[columnKey]

		// reset all sortMap values to 'none'
		Object.keys(sortMap).forEach((sortKey) => (sortMap[sortKey] = ''))

		// set the new sorting order for this column as 'descending' (default) or flip to ascending
		if (previousSortOrder === 'descending') sortMap[columnKey] = 'ascending'
		else sortMap[columnKey] = 'descending'

		// sort the array on the store for this table type
		list = sortArray(list, columnKey, columnType, sortMap[columnKey])
	}
</script>


<div class="table-header-row">
	{#each columns as column, columnIndex}
		<TableColumnHeaderCell
			bind:list={list}
			order={sortMap[column.key]}
			{callback}
			{columns}
			{column}
			{sortTable}
		/>
	{/each}
</div>


<style>
	.table-header-row {
		align-items: flex-start;
		border-bottom: var(--neutral-stroke-100-s);
		display: flex;
	}
</style>
