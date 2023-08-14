<script>
	export let date, name
</script>

<input
	type="date"
	{name}
	bind:value={date}
/>

<style>
	input {
		border: var(--spacing00) solid var(--neutral-100);
		border-radius: var(--spacing05);
		height: var(--spacing12);
		padding: 0 var(--spacing09);
		width: 100%;
	}
</style>