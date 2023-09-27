<script>
	import { StandardCard } from '$lib/index.js'

	export let callback = undefined,
		classes = [],
		icon = undefined,
		link = '',
		styles = [],
		title = ''
</script>

<a href={link} class="link-card">
	<StandardCard {callback} classes={[...classes, 'hover-link']} {icon} {styles} {title}>
		<slot />
	</StandardCard>
</a>

<style>
	.link-card {
		color: var(--neutral-light-base);
		text-decoration: none;
	}
</style>
