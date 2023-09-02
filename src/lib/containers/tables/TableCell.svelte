<script>
	import ArrayCell from '$lib/containers/tables/cells/ArrayCell.svelte'
	import BooleanCell from '$lib/containers/tables/cells/BooleanCell.svelte'
	import CheckboxCell from '$lib/containers/tables/cells/CheckboxCell.svelte'
	import DefaultCell from '$lib/containers/tables/cells/DefaultCell.svelte'
	import EditableCell from '$lib/containers/tables/cells/EditableCell.svelte'
	import TagCell from '$lib/containers/tables/cells/TagCell.svelte'

	export let cellData

	const cellType = cellData?.column?.type
</script>

<div
	class='table-column-body-cell'
	style={`${cellData.column?.styles?.join(';')}`}
>
	{#if cellType === 'array'}
		<ArrayCell {cellData} />
	{:else if cellType === 'boolean'}
		<BooleanCell {cellData} />
	{:else if cellType === 'checkbox'}
		<CheckboxCell {cellData} />
	{:else if cellType === 'tag'}
		<TagCell {cellData} />
	{:else if cellData.column.editable}
		<EditableCell {cellData} />
	{:else}
		<DefaultCell {cellData} />
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