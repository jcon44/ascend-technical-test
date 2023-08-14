<script>
	export let classes, disabled, firstIcon, secondIcon, styles, text;
</script>

<button
	{disabled}
	class={`
		test
		semibold
		${classes.includes('btn-full') ? 'btn-full' : 'btn-fit'}
	`}
	style={styles?.length ? [...styles] : ''}
>
	<div
		class={`
			btn-content-wrapper
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
			<svelte:component this={firstIcon} /> <!-- Icon only -->
		{/if}
	</div>
</button>
