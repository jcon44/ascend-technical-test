<script>
	import { RadioOption } from '$lib/index.js'

	export let 
		callback,
		group = '',
		list = [],
		styles = []
</script>

<div
	class="radio-list"
	style={styles.join(';')}
>
	{#each list as item}
		<RadioOption
			bind:group
			{callback}
			label={item.label}
			value={item.value}
		/>
	{/each}
</div>

<style>
	.radio-list {
		align-items: flex-start;
		align-self: stretch;
		display: flex;
		flex-direction: column;
		gap: var(--spacing06);
	}
</style>
