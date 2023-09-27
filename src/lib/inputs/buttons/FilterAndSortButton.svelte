<script>
	import { Button, FilterLinesSmallIcon } from '$lib/index.js'

	export let callback
</script>

<Button
	{callback}
	classes={['btn-outline', 'semibold', 'btn-m', 'btn-rect', 'btn-inline']}
	firstIcon={FilterLinesSmallIcon}
	text="Filter & Sort"
/>
