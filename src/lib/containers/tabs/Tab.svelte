<script>
	import { Button } from '$lib/index.js'
	import { createEventDispatcher } from 'svelte'

	export let tab, tabIndex, currentTab

	const dispatch = createEventDispatcher()

	function selectTab() {
		dispatch('tabselect', { tabIndex })
	}
</script>


<div class={`tab ${tabIndex === currentTab ? 'selected' : ''}`}>
	<Button
		callback={selectTab}
		classes={['btn-tab']}
		text={tab?.name}
	/>
</div>


<style>
	.tab {
		background-color: var(--background-base);
		border-radius: 0;
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
