<script>
	import { Card } from '$lib/index.js'

	export let callback = null,
		icon = null,
		link = '',
		styles = [],
		title = '',
		value = ''
</script>

<Card classes={['card-s']} {callback} {icon} {link} {styles}>
	<div class="body-s semibold">{title}</div>
	<div class="headline-l-xl semibold">{value}</div>
</Card>

<style>
	.body-s {
		color: var(--neutral-400);
	}
</style>
