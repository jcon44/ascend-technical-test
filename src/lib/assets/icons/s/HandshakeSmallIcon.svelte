<script>
	import { getGlobalColorPalette, Icon } from '$lib/index.js'
	import { onMount } from 'svelte'

	export let styles = [],
		colorOverride

	let palette = {}

	onMount(() => (palette = getGlobalColorPalette()))
</script>

<Icon
	size="24"
	{styles}
>
	<path
		d="M11.724 4.99988L10.9111 4.18698C8.67441 1.95027 5.04797 1.95026 2.81126 4.18698V4.18698C0.574544 6.42369 0.574541 10.0501 2.81126 12.2868L3.69629 13.1719"
		stroke={colorOverride || '#6F6697'}
		stroke-width="2"
	/>
	<path
		d="M10.5722 3.86132L13.3076 6.59669C14.1296 7.41865 14.1296 8.75129 13.3076 9.57325V9.57325C12.4857 10.3952 11.153 10.3952 10.3311 9.57325L8.31162 7.55381"
		stroke={colorOverride || '#6F6697'}
		stroke-width="2"
		stroke-linecap="round"
	/>
	<path
		d="M11.8396 5.0002L12.6525 4.1873C14.8892 1.95059 18.5156 1.95059 20.7524 4.1873C22.8297 6.26463 22.9777 9.54067 21.1965 11.7888"
		stroke={colorOverride || '#6F6697'}
		stroke-width="2"
	/>
	<path
		d="M8.63871 8.62666L3.72821 13.5372C2.99291 14.2725 2.99292 15.4646 3.72821 16.1999V16.1999C4.4635 16.9352 5.65564 16.9352 6.39093 16.1999L9.72883 12.862"
		stroke={colorOverride || '#6F6697'}
		stroke-width="2"
		stroke-linecap="round"
	/>
	<path
		d="M9.83404 12.7634L6.84149 15.7559C6.1062 16.4912 6.1062 17.6833 6.84149 18.4186V18.4186C7.57678 19.1539 8.76892 19.1539 9.50421 18.4186L11.7638 16.159"
		stroke={colorOverride || '#6F6697'}
		stroke-width="2"
		stroke-linecap="round"
	/>
	<path
		d="M14.3899 13.5295L10.9135 17.0059C10.1782 17.7412 10.1782 18.9333 10.9135 19.6686V19.6686C11.6488 20.4039 12.8409 20.4039 13.5762 19.6686L14.5328 18.7121"
		stroke={colorOverride || '#6F6697'}
		stroke-width="2"
		stroke-linecap="round"
	/>
	<rect
		x="14"
		y="18.2207"
		width="3.40395"
		height="3.40395"
		rx="1.70197"
		transform="rotate(-45 14 18.2207)"
		stroke={colorOverride || '#6F6697'}
		stroke-width="2"
	/>
	<rect
		x="16.4072"
		y="15.814"
		width="3.40395"
		height="3.40395"
		rx="1.70197"
		transform="rotate(-45 16.4072 15.814)"
		stroke={colorOverride || '#6F6697'}
		stroke-width="2"
	/>
	<rect
		x="18.814"
		y="13.4072"
		width="3.40395"
		height="3.40395"
		rx="1.70197"
		transform="rotate(-45 18.814 13.4072)"
		stroke={colorOverride || '#6F6697'}
		stroke-width="2"
	/>
</Icon>
