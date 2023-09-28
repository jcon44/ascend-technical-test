<script>
	import { getGlobalColorPalette, Icon } from '$lib/index.js'
	import { onMount } from 'svelte'

	let palette = {}

	onMount(() => (palette = getGlobalColorPalette()))
</script>

<Icon size="16">
	<path
		clip-rule="evenodd"
		d="M13.7071 8.70693C13.8947 8.51939 14 8.26504 14 7.99982C14 7.7346 13.8946 7.48025 13.7071 7.29272L8.70709 2.29288C8.31656 1.90236 7.6834 1.90237 7.29288 2.2929C6.90236 2.68344 6.90237 3.3166 7.2929 3.70712L10.5859 7H3C2.44771 7 2 7.44772 2 8C2 8.55229 2.44771 9 3 9H10.5857L7.29288 12.2929C6.90236 12.6834 6.90237 13.3166 7.2929 13.7071C7.68344 14.0976 8.3166 14.0976 8.70712 13.7071L13.7071 8.70693Z"
		fill-rule="evenodd"
		fill={palette.neutral}
	/>
</Icon>