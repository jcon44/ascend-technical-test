<script>
	import { EyeSmallIcon, IconCircle, getGlobalColorPalette } from '$lib/index.js'
	import { onMount } from 'svelte'

	let palette = {}

	onMount(() => (palette = getGlobalColorPalette()))
</script>

<IconCircle color={palette.info}>
	<EyeSmallIcon />
</IconCircle>