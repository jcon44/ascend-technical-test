<script>
	import { Card } from '$lib/index.js'

	export let callback, height, icon, link, title, value, width = '100%'
</script>

<Card classes={[ 'card-s' ]} {callback} {height} {icon} {link} {width}>
	<div class="body-s semibold">{title}</div>
	<div class="headline-l-xl semibold">{value}</div>
</Card>

<style>
	.body-s {
		color: var(--neutral-400);
	}
</style>