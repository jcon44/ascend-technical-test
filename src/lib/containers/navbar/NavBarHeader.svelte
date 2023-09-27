<script>
	import { AscendLogo, AscendLogoIcon, Button, NavBarToggleButton } from '$lib/index.js'

	export let keepOpen, navBarOpen, toggleNavbar
</script>

<div class="nav-header">
	{#if navBarOpen}
		<a href="/">
			<AscendLogo />
		</a>
		<NavBarToggleButton callback={toggleNavbar} {keepOpen} />
	{:else}
		<AscendLogoIcon />
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
