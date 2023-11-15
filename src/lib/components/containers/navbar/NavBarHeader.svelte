<script>
	import { NavBarToggleButton } from '$lib/index.js'

	export let closedHeaderComponent, openHeaderComponent, keepOpen, navBarOpen, toggleNavbar, url = '/'
</script>

<div class="nav-header">
	{#if navBarOpen}
		<a href={url}>
			<svelte:component this={openHeaderComponent} />
		</a>
		<NavBarToggleButton
			callback={toggleNavbar}
			{keepOpen}
		/>
	{:else}
		<svelte:component this={closedHeaderComponent} />
	{/if}
</div>

<style>
	.nav-header {
		display: flex;
		height: var(--spacing14);
		justify-content: space-between;
		padding: var(--spacing09) var(--spacing06) var(--spacing09) var(--spacing10);
	}
</style>
