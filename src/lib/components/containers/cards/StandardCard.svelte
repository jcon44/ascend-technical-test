<script>
	export let callback = undefined,
		classes = [],
		icon = undefined,
		styles = [],
		title = ''
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
	class={`card-wrapper ${classes?.join(' ') ?? ''}`}
	style={styles?.join('; ')}
	on:click={callback ? callback : ''}
	on:keyup={callback ? callback : ''}
>
	{#if icon}
		<div class="card-icon">
			<svelte:component this={icon} />
		</div>
	{/if}
	{#if title}
		<div class="card-title headline-s-m">
			{title}
		</div>
	{/if}
	<div class="card-content body-s-s">
		<slot />
	</div>
</div>

<style>
	.card-wrapper {
		gap: var(--spacing05);
	}
	.card-content {
		display: flex;
		flex-direction: column;
		height: 100%;
		justify-content: space-between;
	}
	.hover-link:hover {
		box-shadow: var(--neutral-shadow-m);
		text-decoration: none;
	}
</style>
