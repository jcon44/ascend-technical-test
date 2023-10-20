<script>
	import { ArrowDownExtraSmallIcon, ArrowUpExtraSmallIcon } from '$lib/index.js'

	export let callback, order, text = ''
</script>


<button on:click={callback} class="semibold">
	{text}
	{#if order === 'ascending'}
		<ArrowUpExtraSmallIcon />
	{:else if order === 'descending'}
		<ArrowDownExtraSmallIcon />
	{/if}
</button>


<style>
	button {
		align-items: center;
		background-color: transparent;
		border: none;
		cursor: pointer;
		display: flex;
		gap: var(--spacing05);
		padding: 0;
		width: 100%;
	}
</style>
