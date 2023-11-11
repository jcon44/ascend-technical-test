<script>
	import { Button } from '$lib/index.js'

	export let url,
		classes = ['btn-fit', 'btn-l', 'btn-white', 'btn-rect']
</script>

<Button
	text="Contact Us"
	{classes}
	{url}
/>
