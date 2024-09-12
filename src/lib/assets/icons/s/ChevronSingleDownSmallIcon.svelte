<script>
	import { getGlobalColorPalette, Icon } from '$lib/index.js'
	import { onMount } from 'svelte'

	let palette = {},
		colorOverride,
		styles = []

	onMount(() => (palette = getGlobalColorPalette()))
</script>

<Icon 
	size="24"
	{styles}
>
	<path
		d="M6 9L12 15L18 9"
		stroke={colorOverride || "#717171"}
		stroke-width="2"
		stroke-linecap="round"
		stroke-linejoin="round"
	/>
</Icon>
