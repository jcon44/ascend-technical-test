<script>
	export let callback = undefined,
		classes = [],
		icon = undefined,
		styles = [],
		title = '',
		chart = false
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
		<div class="card-title { chart ? 'body-xxl font-weight' : 'headline-s-m'}">
			{title}
		</div>
	{/if}
	<div class="{ chart ? 'chart-content' : 'card-content'} body-s-s">
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
	.chart-content {
		display: flex;
		flex-direction: column;
		height: 100%;
		gap: var(--spacing09);
	}
	.hover-link:hover {
		box-shadow: var(--neutral-shadow-m);
		text-decoration: none;
	}
	.font-weight {
		font-weight: 700;
		letter-spacing: 0.5px;
	}
</style>
