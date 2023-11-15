<script>
	import { Card } from '$lib/index.js'

	export let callback = null,
		data = null,
		icon = null,
		url = '',
		styles = []
</script>

<Card
	classes={['card-s']}
	{callback}
	{icon}
	{styles}
	{url}
>
	<div class="body-s semibold">{data.title}</div>
	<div class="headline-l-xl semibold">{data.value}</div>
</Card>

<style>
	.body-s {
		color: var(--neutral-400);
	}
</style>
