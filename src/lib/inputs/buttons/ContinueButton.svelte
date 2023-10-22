<script>
	import { Button } from '$lib/index.js'

	export let url = ''
</script>

<Button
	classes={['btn-m', 'btn-neutral', 'btn-square']}
	text="Continue"
	{url}
/>
