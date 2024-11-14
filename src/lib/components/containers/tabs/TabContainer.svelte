<script>
	import { TabBar } from '$lib/index.js'

	export let currentTab, tabList

	function handleTabSelection(event) {
		currentTab = event.detail.tabIndex
	}
</script>

<div class="tab-container">
	<TabBar
		{currentTab}
		{tabList}
		on:tabselect={(event) => handleTabSelection(event)}
	/>
	<div class="tab-content">
		<svelte:component this={tabList[currentTab].content} data={tabList[currentTab].data} />
	</div>
</div>

<style>
	.tab-container {
		align-items: center;
		display: flex;
		flex-direction: column;
		gap: var(--spacing06);
		width: 100%;
	}
	.tab-content {
		width: 100%;
	}
</style>
