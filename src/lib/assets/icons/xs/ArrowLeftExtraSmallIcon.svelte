<script>
	import { getGlobalColorPalette, Icon } from '$lib/index.js'
	import { onMount } from 'svelte'

	export let styles = []

	let palette = {}

	onMount(() => (palette = getGlobalColorPalette()))
</script>

<Icon
	size="16"
	{styles}
>
	<path
		clip-rule="evenodd"
		d="M2.29288 8.70693C2.10535 8.51939 2 8.26504 2 7.99982C2 7.7346 2.10537 7.48025 2.2929 7.29272L7.29291 2.29288C7.68344 1.90236 8.3166 1.90237 8.70712 2.2929C9.09764 2.68344 9.09763 3.3166 8.7071 3.70712L5.41411 7L13 7C13.5523 7 14 7.44772 14 8C14 8.55229 13.5523 9 13 9H5.41432L8.70712 12.2929C9.09764 12.6834 9.09763 13.3166 8.7071 13.7071C8.31656 14.0976 7.6834 14.0976 7.29288 13.7071L2.29288 8.70693Z"
		fill-rule="evenodd"
		fill={palette.neutral}
	/>
</Icon>
