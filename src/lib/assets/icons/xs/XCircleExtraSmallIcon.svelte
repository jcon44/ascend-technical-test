<script>
	import { getGlobalColorPalette, Icon } from '$lib/index.js'
	import { onMount } from 'svelte'

	let palette = {}

	onMount(() => (palette = getGlobalColorPalette()))
</script>

<Icon size="16">
	<g clip-path="url(#clip0_4408_11755)">
		<circle
			cx="8"
			cy="8"
			r="7"
			stroke={palette.neutral}
			stroke-width="2"
		/>
		<path
			d="M6 6L9.99997 9.99997"
			stroke={palette.neutral}
			stroke-width="2"
			stroke-linecap="round"
		/>
		<path
			d="M10 6L6.00003 9.99997"
			stroke={palette.neutral}
			stroke-width="2"
			stroke-linecap="round"
		/>
	</g>
	<defs>
		<clipPath id="clip0_4408_11755">
			<rect
				width="16"
				height="16"
				fill="white"
			/>
		</clipPath>
	</defs>
</Icon>
