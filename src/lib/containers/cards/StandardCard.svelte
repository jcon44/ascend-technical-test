<script>
	export let
		callback = undefined,
		classes = [],
		height = '100%',
		icon = undefined,
		title = '',
		width = ''
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class={`${classes?.join(' ') ?? ''}`}
	on:click={callback ? callback : ''}
	on:keyup={callback ? callback : ''}
	style={`
		${(height ? `height: ${height};` : '')}
		${(width ? `width: ${width};` : '')}
	`}
>
	{#if icon}
		<div class='card-icon'>
			<svelte:component this={icon} />
		</div>
	{/if}
	{#if title}
		<div class='card-title headline-s-m'>
			{title}
		</div>
	{/if}
	<div class='card-content body-s-s'>
		<slot />
	</div>
</div>