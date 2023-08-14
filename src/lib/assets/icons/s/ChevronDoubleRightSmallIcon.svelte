<script>
	import { getGlobalColorPalette, Icon } from '$lib/index.js';
	import { onMount } from 'svelte';

	let palette = {};

	onMount(() => (palette = getGlobalColorPalette()));
</script>

<Icon size="14">
	<path
		d="M1 11L6 6L1 1M8 11L13 6L8 1"
		stroke={palette.neutral}
		stroke-width="2"
		stroke-linecap="round"
		stroke-linejoin="round"
	/>
</Icon>

<!-- <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 11L6 6L1 1M8 11L13 6L8 1" stroke="#6F6697" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg> -->