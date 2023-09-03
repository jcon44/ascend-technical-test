<script>
	import { LinkCard, StandardCard } from '$lib/index.js'

	export let
		callback = undefined,
		classes = [],
		height = '',
		icon = undefined,
		link = '',
		title = '',
		width = ''
</script>

<div class='card'>
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
