<script>
	export let date,
		id = '',
		required = false,
		styles = []
</script>

<input
	bind:value={date}
	class="date-input"
	style={styles.join(';')}
	type="date"
	{id}
	{required}
/>

<style>
	.data-input {
		width: 100%;
	}
</style>