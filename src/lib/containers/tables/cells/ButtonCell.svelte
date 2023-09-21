<script>
	export let column, row
</script>


<div
	class={`${column?.classes?.join(' ')}`}
	style={column?.styles?.join(';')}
>
	<svelte:component this={column.component} data={row} />
</div>