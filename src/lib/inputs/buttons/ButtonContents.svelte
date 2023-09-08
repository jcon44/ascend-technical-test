<script>
	export let
		classes=[],
		styles=[],
		text='',
		firstIcon=null,
		secondIcon=null
</script>

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