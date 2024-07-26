<script>
	import { RadioInput } from '$lib/index.js'

	export let callback, group, value
</script>

<RadioInput
	bind:group
	{callback}
	{value}
/>
