<script>
	import { SearchSmallIcon } from '$lib/index.js'

	export let query, callback, placeholder = 'Search'
</script>

<form role="search">
	<button on:click={callback}>
		<svelte:component this={SearchSmallIcon} />
	</button>
	<input bind:value={query} class="search-bar" on:input={callback} type="search" {placeholder} />
</form>

<style>
	form {
		align-items: center;
		border-radius: var(--spacing05);
		border: var(--spacing01) solid var(--neutral-100);
		display: flex;
		gap: var(--spacing05);
		padding: 7px var(--spacing05);
	}
	button {
		background: none;
		border: none;
		cursor: pointer;
	}
	input {
		all: unset;
		background: none;
		border: none;
	}
	.search-bar {
		width: 200px;
	}
</style>
