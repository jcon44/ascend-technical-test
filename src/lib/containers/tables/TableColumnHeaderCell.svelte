<script>
	import { CheckboxInput, TableColumnHeaderButton, sortArray, sortTable } from '$lib/index.js'

	export let callback, column, columns, list

	let allChecked = false

	const sortMap = {}
	Object.values(columns).forEach(column => sortMap[column.key] = 'none')

	function toggleCheckAll() {
		list = list.map(item => {
			item.selected = allChecked
			return item
		})
	}

	function sortRows(columnKey, columnType) {
		list = sortTable(columnKey, columnType, list, sortMap)
	}
</script>


<div
	class='table-column-header-cell'
	style={`${column?.styles?.join(';')}`}
>
	{#if column.type === 'checkbox'}
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<div class="check-all" on:click={toggleCheckAll} on:keyup={toggleCheckAll}>
			<CheckboxInput {callback} bind:checked={allChecked} />
		</div>
	{:else}
		<TableColumnHeaderButton
			callback={() => sortTable(column.key, column.type, list, sortMap)}
			order={sortMap[column.key]}
			text={column?.title || ''}
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