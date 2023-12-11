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
		fill-rule="evenodd"
		clip-rule="evenodd"
		d="M12 4C10.3431 4 9 5.34315 9 7C9 8.65685 10.3431 10 12 10C13.6569 10 15 8.65685 15 7C15 5.34315 13.6569 4 12 4ZM12 12C8.46353 12 5 14.0382 5 17.52C5 17.7851 5.18664 18 5.41687 18H18.5831C18.8134 18 19 17.7851 19 17.52C19 14.0382 15.5365 12 12 12Z"
		fill={palette.neutral}
	/>
</Icon>
