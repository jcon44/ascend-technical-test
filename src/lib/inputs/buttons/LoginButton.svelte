<script>
	import { Button } from '$lib/index.js'

	export let callback
</script>

<Button
	{callback}
	classes={['btn-full', 'btn-l', 'btn-primary', 'btn-rect']}
	text="Login"
/>
