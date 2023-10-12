<script>
	import ArrayCell from '$lib/containers/tables/cells/ArrayCell.svelte'
	import BooleanCell from '$lib/containers/tables/cells/BooleanCell.svelte'
	import ButtonCell from '$lib/containers/tables/cells/ButtonCell.svelte'
	import CheckboxCell from '$lib/containers/tables/cells/CheckboxCell.svelte'
	import DefaultCell from '$lib/containers/tables/cells/DefaultCell.svelte'
	import EditableCell from '$lib/containers/tables/cells/EditableCell.svelte'
	import TagCell from '$lib/containers/tables/cells/TagCell.svelte'

	export let callback, column, row
</script>


<div
	class='table-column-body-cell'
	style={`${column?.styles?.join(';')}`}
>
	{#if column?.type === 'array'}
		<ArrayCell bind:column={column} bind:row={row} />
	{:else if column?.type === 'boolean'}
		<BooleanCell bind:column={column} bind:row={row} />



	{:else if column?.type === 'checkbox' || column?.type === 'checkall'}
		<CheckboxCell {callback} bind:selected={row.selected} />
	
	{:else if column?.type === 'checklist'}
		<CheckboxCell {callback} bind:selected={row[column.key]} />
	
	
	
	{:else if column?.type === 'tag'}
		<TagCell bind:row={row} />
	{:else if column?.type === 'button'}
		<ButtonCell bind:column={column} bind:row={row} />
	{:else if column?.editable}
		<EditableCell bind:column={column} bind:row={row} />
	{:else}
		<DefaultCell bind:column={column} bind:row={row} />
	{/if}
</div>


<style>
	.table-column-body-cell {
		align-items: center;
		align-self: stretch;
		display: flex;
		gap: var(--spacing03);
		padding: var(--spacing06);
	}
</style>