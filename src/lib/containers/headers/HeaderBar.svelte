<script>
	export let button = ''
</script>

<div class="header-bar">
	<svelte:component this={button} />
</div>

<style>
	.header-bar {
		align-items: center;
		background: var(--neutral-000);
		display: flex;
		height: var(--spacing14);
		justify-content: flex-end;
		padding: 0 var(--spacing09);
	}
</style>
