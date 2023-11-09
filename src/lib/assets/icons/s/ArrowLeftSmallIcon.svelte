<script>
	import { getGlobalColorPalette, Icon } from '$lib/index.js'
	import { onMount } from 'svelte'

	export let styles

	let palette = {}

	onMount(() => (palette = getGlobalColorPalette()))
</script>

<Icon size="24" {styles}>
	<path
		d="M19 12H5M5 12L12 19M5 12L12 5"
		stroke={palette.neutral}
		stroke-width="2"
		stroke-linecap="round"
		stroke-linejoin="round"
	/>
</Icon>
