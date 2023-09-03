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

<a href={link}>
	<StandardCard {callback} {classes} {height} {icon} {title} {width}>
		<slot />
	</StandardCard>
</a>

<style>
	a {
		color: var(--neutral-light-base);
		text-decoration: none;
	}
	a:hover {
		text-decoration: none;
	}
</style>