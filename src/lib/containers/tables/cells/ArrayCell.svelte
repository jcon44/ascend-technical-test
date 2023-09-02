<script>
	export let cellData

	const cellContent = cellData.row[cellData.column.key]
</script>

<div
	class={`${cellData.column?.classes?.join(' ')}`}
	style={cellData.column?.styles?.join(';')}
>
	{cellContent?.join(', ')}
</div>