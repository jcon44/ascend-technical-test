<script>
	import { TabBar } from '$lib/index.js'

	export let currentTab, tabList

	function handleTabSelection(event) {
		currentTab = event.detail.tabIndex
	}
</script>

<div class="card-tab-container">
	<TabBar
		{currentTab}
		{tabList}
		on:tabselect={(event) => handleTabSelection(event)}
	/>
	<div class="card-tab-content">
		<svelte:component this={tabList[currentTab].content} />
	</div>
</div>

<style>
	.card-tab-container {
		align-items: center;
		display: flex;
		flex-direction: column;
		gap: var(--spacing06);
		max-height: calc(72dvh - var(--spacing06) - var(--spacing09) - var(--spacing13));
		width: 100%;
	}
	.card-tab-content {
		max-height: calc(72dvh - var(--spacing09));
		width: 100%;
	}
</style>
