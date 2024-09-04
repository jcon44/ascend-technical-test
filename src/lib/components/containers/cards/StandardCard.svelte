<script>
	import { DefaultTooltipElement } from "$lib/index.js"

	export let callback = undefined,
		classes = [],
		icon = undefined,
		styles = [],
		title = '',
		titleTooltip = null,
		chart = false
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
	class={`card-wrapper ${classes?.join(' ') ?? ''}`}
	style={styles?.join('; ')}
	on:click={callback ? callback : ''}
	on:keyup={callback ? callback : ''}
>
	{#if icon || title || titleTooltip}
		<div class="icon-title-wrapper">
			{#if icon}
				<div class="card-icon">
					<svelte:component this={icon} />
				</div>
			{/if}
			{#if title}
				<div class="{chart ? 'body-xxl font-weight' : 'headline-s-m'} card-title">
					{title}
				</div>
			{/if}
			{#if titleTooltip}
				<DefaultTooltipElement>
					{titleTooltip?.content}
				</DefaultTooltipElement>
			{/if}
		</div>
	{/if}
	<div class="{chart ? 'chart-content' : 'card-content'} body-s-s">
		<slot />
	</div>
</div>

<style>
	.card-wrapper {
		gap: var(--spacing05);
	}
	.icon-title-wrapper {
		display: flex;
		gap: var(--spacing06);
		align-items: center;
	}
	.card-content {
		display: flex;
		flex-direction: column;
		height: 100%;
		justify-content: space-between;
	}
	.card-title {
		font-size: var(--body-xl-font-size);
	}
	.chart-content {
		display: flex;
		flex-direction: column;
		gap: var(--spacing09);
		height: calc(100% - 48px);
	}
	.hover-link:hover {
		box-shadow: var(--neutral-shadow-m);
		text-decoration: none;
	}
	.font-weight {
		font-weight: 700;
		letter-spacing: 0.5px;
	}

	@media screen and (min-width: 768px) {
		.card-title {
			font-size: var(--body-xxl-font-size);
		}
	}
</style>
