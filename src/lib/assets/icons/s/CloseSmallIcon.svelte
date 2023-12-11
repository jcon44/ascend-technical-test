<script>
	import { getGlobalColorPalette, Icon } from '$lib/index.js'
	import { onMount } from 'svelte'

	export let styles = []

	let palette = {}

	onMount(() => (palette = getGlobalColorPalette()))
</script>

<Icon
	size="24"
	{styles}
>
	<path
		d="M18 6L6 18M6 6L18 18"
		stroke={palette.neutral}
		stroke-width="2"
		stroke-linecap="round"
		stroke-linejoin="round"
	/>
</Icon>
