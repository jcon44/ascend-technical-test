<script>
	import { Button } from '$lib/index.js';

	export let callback = undefined;
</script>

<Button
	{callback}
	classes={['btn-l', 'btn-primary', 'btn-full', 'btn-square']}
	text='OK'
/>
