<script>
	export let date, id='', required=false, width='100%'
</script>

<input
	type="date"
	bind:value={date}
	style={`width:${width}`}
	{id}
	{required}
/>

<style>
	input {
		border: var(--spacing00) solid var(--neutral-100);
		border-radius: var(--spacing05);
		height: var(--spacing12);
		padding: 0 var(--spacing09);
	}
</style>