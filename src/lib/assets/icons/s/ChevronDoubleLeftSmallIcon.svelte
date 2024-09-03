<script>
	import { getGlobalColorPalette, Icon } from '$lib/index.js'
	import { onMount } from 'svelte'

	export let styles = []

	let palette = {}

	onMount(() => (palette = getGlobalColorPalette()))
</script>

<Icon
	size="14"
	{styles}
>
	<path
		d="M13 11L8 6L13 1M6 11L1 6L6 1"
		stroke={palette.neutral}
		stroke-width="2"
		stroke-linecap="round"
		stroke-linejoin="round"
	/>
</Icon>
