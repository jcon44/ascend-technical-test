<script>
	import { LinkCard, StandardCard } from '$lib/index.js'

	export let
		callback = undefined,
		classes = [],
		height = '',
		icon = undefined,
		link = '',
		padding = '',
		title = '',
		width = ''
</script>

<div class='card' style={`
	${height ? `height: ${height};` : ''}
	${width ? `width: ${width};` : ''}
`}>
	{#if link}
		<LinkCard {callback} {classes} {height} {icon} {link} {title} {width}>
			<slot />
		</LinkCard>
	{:else}
		<StandardCard {callback} {classes} {height} {icon} {title} {width}>
			<slot />
		</StandardCard>
	{/if}
</div>
