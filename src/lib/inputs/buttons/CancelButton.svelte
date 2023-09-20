<script>
	import { Button, browserBack } from '$lib/index.js';

	export let callback = browserBack, url = ''
</script>

<Button
	classes={[
		'btn-fit',
		'btn-m',
		'btn-outline',
		'btn-rect'
	]}
	text="Cancel"
	{callback}
	{url}
/>
