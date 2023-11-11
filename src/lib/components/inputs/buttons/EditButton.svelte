<script>
	import { Button, Edit01SmallIcon } from '$lib/index.js'

	export let callback,
		classes = ['btn-m', 'btn-outline']
</script>

<Button
	leftIcon={Edit01SmallIcon}
	{callback}
	{classes}
/>
