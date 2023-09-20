<script>
	import { SearchSmallIcon } from '$lib/index.js'

	export let callback,
		placeholder = 'Search',
		query = '',
		tabindex = ''
</script>

<form role="search" class='search-bar-input-control'>
	<button on:click={callback} class='search-bar-button'>
		<svelte:component this={SearchSmallIcon} />
	</button>
	<input
		bind:value={query}
		class="search-bar"
		on:input={callback}
		tabindex={tabindex}
		type="search"
		{placeholder} 
	/>
</form>

<style>
	.search-bar-input-control {
		align-items: center;
		border-radius: var(--spacing05);
		border: var(--neutral-stroke-100-s);
		display: flex;
		gap: var(--spacing05);
		padding: var(--spacing03) var(--spacing05);
	}
	.search-bar-button {
		background: none;
		border: none;
		cursor: pointer;
	}
	.search-bar {
		all: unset;
		background: none;
		border: none;
		width: var(--spacing18);
	}
</style>
