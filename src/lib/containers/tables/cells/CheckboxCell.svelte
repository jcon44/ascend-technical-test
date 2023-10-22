<script>
	import CheckboxInput from '$lib/inputs/checkboxes/CheckboxInput.svelte'

	export let callback, selected
</script>

<CheckboxInput
	{callback}
	bind:checked={selected}
/>
