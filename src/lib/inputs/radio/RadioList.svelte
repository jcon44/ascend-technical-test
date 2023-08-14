<script>
	import { RadioOption } from '$lib/index.js'

	export let list
</script>

<div class="radio-list">
	{#each list as item}
		<RadioOption bind:item={item} />
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
