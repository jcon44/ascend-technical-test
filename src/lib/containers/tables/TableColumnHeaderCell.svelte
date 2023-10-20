<script>
	import { CheckboxInput, TableColumnHeaderButton } from '$lib/index.js'

	export let callback, column, columns, list, order, sortTable

	let allChecked = false

	function toggleCheckAll() {
		list = list.map(item => {
			item.selected = allChecked
			return item
		})
	}
</script>


<div
	class='table-column-header-cell'
	style={`${column?.styles?.join(';')}`}
>
	{#if column.type === 'checkall'}
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<div class="check-all" on:click={toggleCheckAll} on:keyup={toggleCheckAll}>
			<CheckboxInput {callback} bind:checked={allChecked} />
		</div>
	{:else}
		<TableColumnHeaderButton
			callback={() => sortTable(column.key, column.type)}
			text={column?.title || ''}
			{order}
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