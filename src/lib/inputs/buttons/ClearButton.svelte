<script>
	import { Button, XCircleSmallIcon } from '$lib/index.js'

	export let callback
</script>

<Button
	{callback}
	classes={['btn-outline', 'btn-rect', 'btn-m']}
	height="48px"
	text="Clear"
	icon={XCircleSmallIcon}
	iconSide="left"
/>
