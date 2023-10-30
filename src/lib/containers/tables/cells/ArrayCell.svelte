<script>
	export let callback, column, row

	$: arrayCellContent = callback ? callback(row[column.key]) : row[column.key]?.join(', ')
</script>

<div
	class={`${column?.classes?.join(' ')}`}
	style={column?.styles?.join(';')}
>
	{arrayCellContent}
</div>
