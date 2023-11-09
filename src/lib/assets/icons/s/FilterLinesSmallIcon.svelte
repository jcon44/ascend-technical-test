<script>
	import { getGlobalColorPalette, Icon } from '$lib/index.js'
	import { onMount } from 'svelte'

	export let styles

	let palette = {}

	onMount(() => (palette = getGlobalColorPalette()))
</script>

<Icon size="24" {styles}>
	<path
		d="M6 12H18M3 6H21M9 18H15"
		stroke={palette.neutral}
		stroke-width="2"
		stroke-linecap="round"
		stroke-linejoin="round"
	/>
</Icon>
