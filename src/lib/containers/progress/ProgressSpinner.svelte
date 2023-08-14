<script>
	import { getGlobalColorPalette } from '$lib/index.js';
	import { onMount } from 'svelte';

	export let type = 'neutral';

	let palette = {};

	onMount(() => (palette = getGlobalColorPalette()));
</script>

<div class="progress-spinner-container">
	<svg
		class="progress-spinner"
		height="50"
		style="animation-duration:1000ms;"
		viewbox="0 0 20 20"
		width="50"
	>
		<circle
			cx="10"
			cy="10"
			fill="none"
			r="6"
			role="presentation"
			stroke-dasharray="{Math.PI * 4}, 100"
			stroke-linecap="square"
			stroke-width="1.5"
			stroke={palette[type]}
		/>
	</svg>
</div>

<style>
	.progress-spinner {
		animation-iteration-count: infinite;
		animation-name: spin;
		animation-timing-function: linear;
		transition-property: transform;
	}
	@keyframes spin {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}
</style>
