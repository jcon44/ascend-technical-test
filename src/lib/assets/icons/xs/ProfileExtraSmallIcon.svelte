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
		d="M8 3C6.85295 3 5.92308 3.92987 5.92308 5.07692C5.92308 6.22398 6.85295 7.15385 8 7.15385C9.14705 7.15385 10.0769 6.22398 10.0769 5.07692C10.0769 3.92987 9.14705 3 8 3ZM8 8.53846C5.72656 8.53846 3.5 9.71434 3.5 11.7231C3.5 11.876 3.61998 12 3.76799 12H12.232C12.38 12 12.5 11.876 12.5 11.7231C12.5 9.71434 10.2734 8.53846 8 8.53846Z"
		fill-rule="evenodd"
		fill={palette.neutral}
	/>
</Icon>
