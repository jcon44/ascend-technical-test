<script>
	export let bottomIcon = null,
		disabled = false,
		leftIcon = null,
		rightIcon = null,
		text = '',
		topIcon = null
</script>

<div class="button-contents">
	{#if text}
		{#if topIcon}
			<div class="block-content">
				<svelte:component this={topIcon} />
				{text}
			</div>
		{:else if bottomIcon}
			<div class="block-content">
				{text}
				<svelte:component this={bottomIcon} />
			</div>
		{:else if leftIcon && rightIcon}
			<div class="inline-content">
				<svelte:component this={leftIcon} />
				{text}
				<svelte:component this={rightIcon} />
			</div>
		{:else if leftIcon}
			<div class="inline-content">
				<svelte:component this={leftIcon} />
				{text}
			</div>
		{:else if rightIcon}
			<div class="inline-content">
				{text}
				<svelte:component this={rightIcon} />
			</div>
		{:else}
			<div class="block-content">
				{text}
			</div>
		{/if}
	{:else}
		<div class="block-content">
			<svelte:component this={leftIcon || rightIcon || topIcon || bottomIcon} />
		</div>
	{/if}
</div>

<style>
	.button-contents,
	.block-content,
	.inline-content {
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.block-content {
		flex-direction: column;
		gap: var(--spacing03);
	}
	.inline-content {
		flex-direction: row;
		gap: var(--spacing05);
	}
</style>
