<script>
	import { Button } from '$lib/index.js'

	export let callback
</script>

<Button
	classes={['btn-fit', 'btn-m', 'btn-outline', 'btn-rect']}
	text="Logout"
	{callback}
/>
