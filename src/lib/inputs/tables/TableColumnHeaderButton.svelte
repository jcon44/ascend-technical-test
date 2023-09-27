<script>
	import { ArrowDownExtraSmallIcon, ArrowUpExtraSmallIcon } from '$lib/index.js'

	export let callback,
		order = 'descending',
		text = null
</script>

<button on:click={callback} class="semibold">
	{text}
	{#if order === 'descending'}
		<ArrowDownExtraSmallIcon />
	{:else if order === 'ascending'}
		<ArrowUpExtraSmallIcon />
	{/if}
</button>

<style>
	button {
		align-items: center;
		background-color: transparent;
		border: none;
		cursor: pointer;
		display: flex;
		padding: 0;
		width: 100%;
	}
</style>
