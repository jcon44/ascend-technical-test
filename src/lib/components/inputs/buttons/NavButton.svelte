<script>
	import { Button, SubNavButton, NavButtonChevronDownIcon, NavButtonChevronUpIcon } from '$lib/index.js'
	import { page } from '$app/stores'

	export let pageData = undefined,
		navBarOpen,
		open = false

	function toggleSubNav() {
		open = !open
	}

	$: currentPageLink = $page.url.pathname.includes(pageData?.url)
</script>

<div class="navbar-button-wrapper">
	<div class="indicator-wrapper">
		<div class={`current-page-indicator ${currentPageLink ? 'current-page-link' : ''}`} />
		<div class="nav-button">
			<Button
				callback={toggleSubNav}
				classes={['btn-left', 'btn-full', 'btn-l', 'btn-white']}
				leftIcon={pageData?.icon ?? null}
				text={navBarOpen ? pageData?.text : ''}
				url={pageData?.url ?? ''}
				rightIcon={pageData.sublinks?.length > 0 ? open ? NavButtonChevronUpIcon : NavButtonChevronDownIcon : ''}
			/>
		</div>
	</div>
	{#if pageData.sublinks?.length > 0}
		<div class="sub-nav-wrapper {open ? 'open' : 'closed'}">
			{#each pageData.sublinks as sublink}
				<SubNavButton 
					{sublink}
				/>
			{/each}
		</div>
	{/if}
</div>

<style>
	.navbar-button-wrapper {
		display: flex;
		flex-direction: column;
		width: 100%;
	}
	.nav-button {
		width: 100%;
	}
	.indicator-wrapper {
		display: flex;
	}
	.current-page-indicator {
		width: var(--spacing02);
		border-radius: var(--border-radius-s);
	}
	.current-page-link {
		background-color: var(--primary-base);
	}
	.sub-nav-wrapper {
		overflow-y: hidden;
	}
	.closed {
		height: 0;
	}
</style>
