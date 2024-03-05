<script>
	import { ArrayCell, BooleanCell, ButtonCell, CheckboxCell, DateCell, DefaultCell, EditableCell, RadioCell, TagCell } from '$lib/index'

	export let column, row
</script>

<div
	class="table-column-body-cell"
	style={`${column?.styles?.join(';')}`}
>
	{#if column?.type === 'array'}
		<ArrayCell
			callback={column.callback}
			bind:column
			bind:row
		/>
	{:else if column?.type === 'boolean'}
		<BooleanCell
			bind:column
			bind:row
		/>
	{:else if column?.type === 'button'}
		<ButtonCell
			bind:column
			bind:row
		/>
	{:else if column?.type === 'checkbox' || column?.type === 'checkall'}
		<CheckboxCell
			callback={column.callback}
			bind:selected={row.selected}
		/>
	{:else if column?.type === 'checklist'}
		<CheckboxCell
			callback={column.callback}
			bind:selected={row[column.key]}
		/>
	{:else if column?.type === 'date'}
		<DateCell
			bind:column
			bind:row
		/>
	{:else if column?.type === 'radiolist'}
		<RadioCell
			callback={column.callback}
			bind:group={row.group}
			value={column.key}
		/>
	{:else if column?.type === 'tag'}
		<TagCell bind:row />
	{:else if column?.editable}
		<EditableCell
			bind:column
			bind:row
		/>
	{:else}
		<DefaultCell
			bind:column
			bind:row
		/>
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
