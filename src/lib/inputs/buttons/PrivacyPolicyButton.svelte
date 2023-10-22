<script>
	import { Button } from '$lib/index.js'

	export let url,
		classes = ['btn-fit', 'btn-l', 'btn-white', 'btn-rect']
</script>

<Button
	text="Privacy Policy"
	{classes}
	{url}
/>
