<script>
	import { Button } from '$lib/index.js'
	import { createEventDispatcher } from 'svelte'

	export let currentTab, icon, tab, tabIndex

	const dispatch = createEventDispatcher()

	function selectTab() {
		dispatch('tabselect', { tabIndex })
	}
</script>

<div class={`tab ${tabIndex === currentTab ? 'selected' : ''}`}>
	<Button
		callback={selectTab}
		classes={['btn-tab', 'btn-full']}
		text={tab?.name}
		topIcon={icon}
	/>
</div>

<style>
	.tab {
		align-items: center;
		background-color: var(--background-base);
		border-radius: 0;
		display: flex;
		justify-content: center;
		min-width: var(--spacing16);
	}
	.tab:active,
	.tab:hover {
		color: var(--neutral-400);
		border-bottom: var(--spacing00) solid var(--primary-base);
	}
	.selected {
		border-bottom: var(--spacing01) solid var(--primary-base);
	}
	.selected:active,
	.selected:hover {
		border-bottom: var(--spacing01) solid var(--primary-base);
	}
</style>
