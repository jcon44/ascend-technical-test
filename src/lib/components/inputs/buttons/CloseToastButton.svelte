<script>
	import { Button, CloseSmallWhiteIcon } from '$lib/index.js'

	export let callback
</script>

<Button
	{callback}
	classes={['btn-m', 'btn-neutral', 'btn-square']}
	leftIcon={CloseSmallWhiteIcon}
/>
