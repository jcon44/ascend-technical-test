<script>
	import { Button, browserBack } from '$lib/index.js'

	export let callback = browserBack,
		url = ''
</script>

<Button
	classes={['btn-fit', 'btn-l', 'btn-outline', 'btn-rect']}
	text="Cancel"
	{callback}
	{url}
/>
