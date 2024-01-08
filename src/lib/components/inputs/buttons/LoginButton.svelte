<script>
	import { SubmitButton } from '$lib/index.js'

	export let callback = null
</script>

<SubmitButton
	{callback}
	classes={['btn-full', 'btn-l', 'btn-primary', 'btn-rect']}
	text="Login"
/>
