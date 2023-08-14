<script>
	import { Tab } from '$lib/index.js'

	export let currentTab, tabList
</script>


<div class='tab-bar'>
	{#each tabList as tab, tabIndex}
		<Tab bind:tab={tab} {tabIndex} {currentTab} on:tabselect />
	{/each}
</div>


<style>
	.tab-bar {
		align-items: center;
		border-bottom: var(--spacing00) solid var(--neutral-100);
		display: flex;
		gap: var(--spacing09);
		width: 100%;
	}
</style>