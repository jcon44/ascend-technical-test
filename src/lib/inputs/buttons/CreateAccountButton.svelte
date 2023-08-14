<script>
	import { Button } from '$lib/index.js';

	export let callback
</script>

<Button
	{callback}
	classes={[
		'btn-full',
		'btn-s',
		'btn-white',
		'btn-rect'
	]}
	text="Create Account or Change Profile Info"
/>