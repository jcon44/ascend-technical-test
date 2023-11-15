<script>
	import { Button, ProfileSmallIcon } from '$lib/index.js'

	export let callback = undefined, url = ''
</script>

<Button
	classes={['btn-circle', 'btn-m', 'btn-outline']}
	leftIcon={ProfileSmallIcon}
	{callback}
	{url}
/>
