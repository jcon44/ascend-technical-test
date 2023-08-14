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
	.selected {
		border-bottom: var(--spacing01) solid var(--primary-base);
	}
</style>
