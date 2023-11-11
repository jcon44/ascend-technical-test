<script>
	import { Button } from '$lib/index.js'

	export let callback
</script>

<Button
	{callback}
	classes={['btn-fit', 'btn-l', 'btn-outline', 'btn-rect']}
	text="Clear Filters"
/>
