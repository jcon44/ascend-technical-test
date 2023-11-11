<script>
	import { Button, XCircleSmallIcon } from '$lib/index.js'

	export let callback
</script>

<Button
	classes={['btn-outline', 'btn-rect', 'btn-m']}
	icon={XCircleSmallIcon}
	iconSide="left"
	styles={['height: 48px']}
	text="Clear"
	{callback}
/>
