<script>
	import { LinkCard, StandardCard } from '$lib/index.js'

	export let
		callback = undefined,
		classes = [],
		icon = undefined,
		link = '',
		styles = [],
		title = ''
</script>

<div style={`${styles.join(';')}`}>
	{#if link}
		<LinkCard {callback} {classes} {icon} {link} {styles} {title}>
			<slot />
		</LinkCard>
	{:else}
		<StandardCard {callback} {classes} {icon} {styles} {title}>
			<slot />
		</StandardCard>
	{/if}
</div>
