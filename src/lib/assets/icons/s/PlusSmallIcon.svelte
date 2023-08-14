<script>
	import { getGlobalColorPalette, Icon } from '$lib/index.js';
	import { onMount } from 'svelte';

	let palette = {};

	onMount(() => (palette = getGlobalColorPalette()));
</script>

<Icon size="24">
	<path
		d="M12 5V19M5 12H19"
		stroke={palette.neutral}
		stroke-width="2"
		stroke-linecap="round"
		stroke-linejoin="round"
	/>
</Icon>
