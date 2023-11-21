<script>
	import { LinkCard, StandardCard } from '$lib/index.js'

	export let callback = undefined,
		classes = [],
		icon = undefined,
		styles = [],
		title = '',
		url = ''
</script>

{#if url}
	<LinkCard
		{callback}
		{classes}
		{icon}
		{styles}
		{title}
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
	>
		<slot />
	</StandardCard>
{/if}
