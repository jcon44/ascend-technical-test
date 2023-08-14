<script>
	export let time, name
</script>

<input
	type="time"
	{name}
	bind:value={time}
/>

<style>
	input {
		border: var(--spacing00) solid var(--neutral-100);
		border-radius: var(--spacing05);
		height: var(--spacing12);
		padding: var(--spacing05) var(--spacing06) var(--spacing05) var(--spacing09);
		width: 100%;
	}
</style>