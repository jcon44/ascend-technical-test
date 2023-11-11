<script>
	import CheckboxInput from '$lib/components/inputs/checkboxes/CheckboxInput.svelte'

	export let callback, selected
</script>

<CheckboxInput
	{callback}
	bind:checked={selected}
/>
