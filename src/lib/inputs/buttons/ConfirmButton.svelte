<script>
	import { Button } from '$lib/index.js'

	export let callback = null,
		classes = ['btn-fit', 'btn-l', 'btn-square', 'btn-primary'],
		url = ''
</script>

<Button
	{callback}
	{classes}
	text="Confirm"
	{url}
/>
