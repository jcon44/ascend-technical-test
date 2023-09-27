<script>
	export let column, row
</script>

<div class={`${column?.classes?.join(' ')}`} style={column?.styles?.join(';')}>
	{row[column.key] ? 'Yes' : 'No'}
</div>
