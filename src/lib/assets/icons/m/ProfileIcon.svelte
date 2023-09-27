<script>
	import { getGlobalColorPalette, Icon } from '$lib/index.js'
	import { onMount } from 'svelte'

	let palette = {}

	onMount(() => (palette = getGlobalColorPalette()))
</script>

<Icon size="32">
	<path
		fill-rule="evenodd"
		clip-rule="evenodd"
		d="M16 2C12.6863 2 10 4.68629 10 8C10 11.3137 12.6863 14 16 14C19.3137 14 22 11.3137 22 8C22 4.68629 19.3137 2 16 2ZM16 18C9.43227 18 3 21.397 3 27.2C3 27.6418 3.34662 28 3.77419 28H28.2258C28.6534 28 29 27.6418 29 27.2C29 21.397 22.5677 18 16 18Z"
		fill={palette.neutral}
	/>
</Icon>
