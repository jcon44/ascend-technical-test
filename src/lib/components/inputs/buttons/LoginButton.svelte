<script>
	import { SubmitButton } from '$lib/index.js'

	export let callback = null, disabled = false
</script>

<SubmitButton
	{callback}
	{disabled}
	classes={['btn-full', 'btn-l', 'btn-primary', 'btn-rect']}
	text="Login"
/>
