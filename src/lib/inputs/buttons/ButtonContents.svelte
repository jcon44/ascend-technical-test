<script>
	export let
		classes,
		styles,
		text,
		firstIcon,
		secondIcon
</script>

<div
	class={`
		btn-content
		${classes?.join(' ') ?? ''}
	`}
	style={styles?.length ? [...styles] : ''}
>
	{#if text}
		{#if !firstIcon && !secondIcon}
			{text}
		{:else if firstIcon && secondIcon}
			<svelte:component this={firstIcon} />
			{text}
			<svelte:component this={secondIcon} />
		{:else if firstIcon}
			<svelte:component this={firstIcon} />
			{text}
		{:else if secondIcon}
			{text}
			<svelte:component this={secondIcon} />
		{/if}
	{:else}
		<svelte:component this={firstIcon} />
	{/if}
</div>

<style>
	.btn-content {
		align-items: center;
		background-color: inherit;
		border-radius: var(--btn-border-radius);
		border: inherit;
		color: inherit;
		cursor: pointer;
		display: flex;
		text-decoration: none;
	}
</style>