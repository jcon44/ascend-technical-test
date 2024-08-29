<script>
	import { LinkCard, StandardCard } from '$lib/index.js'

	export let callback = undefined,
		chart = false,
		classes = [],
		icon = undefined,
		styles = [],
		title = '',
		titleTooltip = null,
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
		{chart}
	>
		<slot />
	</StandardCard>
{/if}
