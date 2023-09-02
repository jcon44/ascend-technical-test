<script>
	export let cellData
</script>

<svelte:component
	this={cellData.column.component}
	classes={`${cellData.column?.classes?.join(' ')}`}
	record={cellData.row}
	style={`${cellData.column?.styles?.join(';')}`}
/>