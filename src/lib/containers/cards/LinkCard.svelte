<script>
	import { StandardCard } from '$lib/index.js'

	export let
		callback = undefined,
		classes = [],
		height = '',
		icon = undefined,
		link = '',
		title = '',
		width = ''
</script>

<a href={link} class='link-card'>
	<StandardCard {callback} {classes} {height} {icon} {title} {width}>
		<slot />
	</StandardCard>
</a>

<style>
	.link-card {
		color: var(--neutral-light-base);
		text-decoration: none;
	}
	.link-card:hover {
		text-decoration: none;
	}
</style>