<script>
	export let column, row
</script>

<input
	bind:value={row[column.key]}
	class={`${column?.classes?.join(' ')}`}
	style={column?.styles?.join(';')}
	type="text"
/>
