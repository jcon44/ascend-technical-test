<script>
	export let column, columnIndex, row
</script>

<div
	class='table-column-body-cell'
	style={`${column?.styles?.join(';')}`}
>
	{#if column.component !== undefined}
		<svelte:component
			this={column.component}
			classes={`column-${columnIndex} ${column?.classes?.join(' ')}`}
			record={row}
			style={`${column?.styles?.join(';')}`}
		/>
	{:else if column.type === 'checkbox'}
		<CheckboxInput bind:checked={row.selected} />
	{:else if column.editable}
		<input
			bind:value={row[column.key]}
			class={`column-${columnIndex} ${column?.classes?.join(' ')}`}
			style={column?.styles?.join(';')}
			type="text"
		/>
	{:else}
		<div
			class={`column-${columnIndex} ${column?.classes?.join(' ')}`}
			style={column?.styles?.join(';')}
		>
			{#if column.type === 'boolean'}
				{row[column.key] ? 'Yes' : 'No'}
			{:else}
				{column.type === 'array' ? row[column.key]?.join(', ') : row[column.key]}
			{/if}
		</div>
	{/if}
</div>

<style>
	.table-column-body-cell {
		display: flex;
		padding: var(--spacing06);
		width: 100%;
	}
</style>