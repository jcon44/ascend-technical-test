<script>
	import { CheckboxInput, TableColumnHeaderButton, sortArray } from '$lib/index.js'

	export let cellData

	let { column, columns, columnIndex, list } = cellData

	let allChecked = false

	const sortMap = {}
	Object.values(columns).forEach((column) => (sortMap[column.key] = 'none'))

	function sortTable(columnKey, columnType) {
		// save the last sort order for this column
		const previousSortOrder = sortMap[columnKey]

		// reset all sortMap values to 'none'
		Object.keys(sortMap).forEach((sortKey) => (sortMap[sortKey] = 'none'))

		// set the new sorting order for this column as 'descending' (default) or flip to ascending
		if (previousSortOrder === 'descending') sortMap[columnKey] = 'ascending'
		else sortMap[columnKey] = 'descending'

		// sort the array on the store for this table type
		list = sortArray(list, columnKey, columnType, sortMap[columnKey])
	}

	function toggleCheckAll() {
		list.forEach((item) => (item.selected = allChecked))
	}
</script>

<div
	class='table-column-header-cell'
	style={`${column?.styles?.join(';')}`}
>
	{#if column.type === 'checkbox'}
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<div class="check-all" on:click={toggleCheckAll} on:keyup={toggleCheckAll}>
			<CheckboxInput bind:checked={allChecked} />
		</div>
	{:else}
		<TableColumnHeaderButton
			callback={() => sortTable(column.key, column.type)}
			order={sortMap[column.key]}
			text={column?.title || ''}
			index={columnIndex}
		/>
	{/if}
</div>

<style>
	.table-column-header-cell {
		align-items: center;
		align-self: stretch;
		display: flex;
		gap: var(--spacing03);
		padding: var(--spacing06);
	}
</style>