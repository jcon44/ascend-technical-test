<script>
	import { getGlobalColorPalette, Icon } from '$lib/index.js'
	import { onMount } from 'svelte'

	let palette = {}
	export let colorOverride = null,
		styles = []

	onMount(() => (palette = getGlobalColorPalette()))
</script>

<Icon
	size="24"
	{styles}
>
    <path 
        fill-rule="evenodd" 
        clip-rule="evenodd" 
        d="M5 4C4.44772 4 4 4.44772 4 5V10C4 10.5523 4.44772 11 5 11H10C10.5523 11 11 10.5523 11 10V5C11 4.44772 10.5523 4 10 4H5ZM6 9V6H9V9H6ZM14 4C13.4477 4 13 4.44772 13 5V10C13 10.5523 13.4477 11 14 11H19C19.5523 11 20 10.5523 20 10V5C20 4.44772 19.5523 4 19 4H14ZM15 9V6H18V9H15ZM4 14C4 13.4477 4.44772 13 5 13H10C10.5523 13 11 13.4477 11 14V19C11 19.5523 10.5523 20 10 20H5C4.44772 20 4 19.5523 4 19V14ZM6 15V18H9V15H6ZM14 13C13.4477 13 13 13.4477 13 14V19C13 19.5523 13.4477 20 14 20H19C19.5523 20 20 19.5523 20 19V14C20 13.4477 19.5523 13 19 13H14ZM15 18V15H18V18H15Z" 
        fill={colorOverride || palette.neutral}
    />
</Icon>