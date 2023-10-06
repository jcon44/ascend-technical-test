<script>
	import { Card } from '$lib/index.js'

	export let callback = null,
		data = null,
		icon = null,
		link = '',
		styles = []
</script>

<Card classes={['card-s']} {callback} {icon} {link} {styles}>
	<div class="body-s semibold">{data.title}</div>
	<div class="headline-l-xl semibold">{data.value}</div>
</Card>

<style>
	.body-s {
		color: var(--neutral-400);
	}
</style>
