<script>
	import { Button, Edit01SmallIcon } from '$lib/index.js'

	export let callback,
		classes = ['btn-m', 'btn-outline'],
		url = ''
</script>

<Button
	leftIcon={Edit01SmallIcon}
	{callback}
	{classes}
	{url}
/>
