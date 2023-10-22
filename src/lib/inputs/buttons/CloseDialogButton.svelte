<script>
	import { Button, CloseSmallIcon } from '$lib/index.js'

	export let callback
</script>

<Button
	{callback}
	classes={['btn-m', 'btn-outline', 'btn-square']}
	firstIcon={CloseSmallIcon}
/>
