<script>
	import DownloadSmallIcon from '$lib/assets/icons/s/DownloadSmallIcon.svelte'
	import { Button } from '$lib/index.js'

	export let callback
</script>

<Button
	{callback}
	classes={['btn-outline', 'btn-m', 'btn-rect', 'semibold', 'btn-inline']}
	leftIcon={DownloadSmallIcon}
	text="Export CSV"
/>
