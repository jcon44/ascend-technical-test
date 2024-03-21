<script>
	import { Button } from '$lib/index.js'

	export let callback = null,
		classes = ['btn-fit', 'btn-l', 'btn-square', 'btn-primary'],
		loading = false,
		url = ''
</script>

<Button
	text="Confirm"
	{callback}
	{classes}
	{loading}
	{url}
/>
