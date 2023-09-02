<script>
	export let cellData
</script>

<input
	bind:value={cellData.row[cellData.column.key]}
	class={`${cellData.column?.classes?.join(' ')}`}
	style={cellData.column?.styles?.join(';')}
	type="text"
/>