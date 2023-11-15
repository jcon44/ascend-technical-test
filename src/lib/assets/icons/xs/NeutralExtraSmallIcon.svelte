<script>
	import { getGlobalColorPalette, Icon } from '$lib/index.js'
	import { onMount } from 'svelte'

	export let styles = []

	let palette = {}

	onMount(() => (palette = getGlobalColorPalette()))
</script>

<Icon size="16" {styles}>
	<path
		clip-rule="evenodd"
		d="M14 8C14 8.55228 13.5523 9 13 9H3C2.44771 9 2 8.55228 2 8C2 7.44772 2.44771 7 3 7H13C13.5523 7 14 7.44772 14 8Z"
		fill-rule="evenodd"
		fill={palette.neutral}
	/>
</Icon>
