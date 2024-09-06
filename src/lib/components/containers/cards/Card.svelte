<script>
	import { LinkCard, StandardCard } from '$lib/index.js'

	export let callback = undefined,
		chart = false,
		type,
		classes = [],
		icon = undefined,
		styles = [],
		title = '',
		titleTooltip = null,
		titleButton = false,
		titleButtonText = 'See More',
		url = ''
</script>

{#if url}
	<LinkCard
		{callback}
		{classes}
		{icon}
		{styles}
		{title}
		{titleTooltip}
		{url}
	>
		<slot />
	</LinkCard>
{:else}
	<StandardCard
		{callback}
		{classes}
		{icon}
		{styles}
		{title}
		{titleTooltip}
		{titleButton}
		{titleButtonText}
		{chart}
		{type}
	>
		<slot />
	</StandardCard>
{/if}
