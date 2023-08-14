<script>
	export let title,
		body,
		icon,
		button = undefined
</script>


<div class="alert">
	<div class="alert-icon">
		<svelte:component this={icon} />
	</div>
	<div class="alert-text">
		<div class="alert-title headline-l-xs">
			{title}
		</div>
		<div class="alert-body body-s">
			{body}
		</div>
	</div>
	{#if button}
		<div class="alert-button">
			<svelte:component this={button} />
		</div>
	{/if}
</div>


<style>
	.alert {
		border: var(--spacing01) solid var(--neutral-050);
		border-radius: var(--spacing09);
		padding: var(--spacing09);
		display: flex;
		gap: var(--spacing06);
	}
	.alert-icon {
		align-items: center;
		background-color: var(--neutral-000);
		border-radius: var(--border-radius-xl);
		display: flex;
		height: var(--spacing12);
		justify-content: center;
		padding: var(--spacing05);
		width: var(--spacing12);
	}
	.alert-text {
		width: var(--container-max-width-full);
	}
</style>
