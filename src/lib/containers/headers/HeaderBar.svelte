<script>
	export let button = ''
</script>

<div class="header-bar">
	<svelte:component this={button} />
</div>

<style>
	.header-bar {
		align-items: center;
		align-self: stretch;
		background: var(--neutral-000);
		display: flex;
		flex-grow: 0;
		flex-shrink: 0;
		height: var(--spacing14);
		justify-content: flex-end;
		padding: 0 var(--spacing09);
	}
</style>
