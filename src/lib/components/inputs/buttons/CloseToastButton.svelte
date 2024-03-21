<script>
	import { Button, CloseSmallWhiteIcon } from '$lib/index.js'

	export let callback
</script>

<Button
	{callback}
	classes={['btn-close-toast']}
	leftIcon={CloseSmallWhiteIcon}
/>
