<script>
	import { getGlobalColorPalette, Icon } from '$lib/index.js'
	import { onMount } from 'svelte'

	export let styles = []

	let palette = {}

	onMount(() => (palette = getGlobalColorPalette()))
</script>

<Icon
	size="16"
	{styles}
>
	<path
		d="M3 3.00003L12.9999 13"
		stroke-linecap="round"
		stroke-width="2"
		stroke={palette.neutral}
	/>
	<path
		d="M13 3.00003L3.00007 13"
		stroke-linecap="round"
		stroke-width="2"
		stroke={palette.neutral}
	/>
</Icon>
