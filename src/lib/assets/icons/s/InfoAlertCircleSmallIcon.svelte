<script>
	import { EyeSmallIcon, Icon, getGlobalColorPalette } from '$lib/index.js'
	import { onMount } from 'svelte'

	export let styles = ['border-radius: 50%;']

	let palette = {}

	onMount(() => (palette = getGlobalColorPalette()))
</script>

<Icon color={palette.info} {styles}>
	<EyeSmallIcon />
</Icon>
