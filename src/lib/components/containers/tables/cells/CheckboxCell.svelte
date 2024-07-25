<script>
	import { CheckboxInput } from '$lib/index.js'

	export let callback, selected
</script>

<CheckboxInput
	{callback}
	bind:checked={selected}
/>
