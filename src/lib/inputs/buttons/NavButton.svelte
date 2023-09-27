<script>
	import { Button } from '$lib/index.js'
	import { page } from '$app/stores'

	export let pageData = undefined,
		navBarOpen

	$: currentPageLink = pageData?.url === $page.url.pathname
</script>

<div class="navbar-button-wrapper">
	<div class={`current-page-indicator ${currentPageLink ? 'current-page-link' : ''}`} />
	<div class="nav-button">
		<Button
			classes={['btn-left', 'btn-full', 'btn-l', 'btn-white', 'btn-rect']}
			firstIcon={pageData?.icon ?? null}
			text={navBarOpen ? pageData?.text : ''}
			url={pageData?.url ?? ''}
		/>
	</div>
</div>

<style>
	.navbar-button-wrapper {
		display: flex;
		width: 100%;
	}
	.nav-button {
		width: 100%;
	}
	.current-page-indicator {
		width: var(--spacing02);
		border-radius: var(--border-radius-s);
	}
	.current-page-link {
		background-color: var(--secondary-base);
	}
</style>
