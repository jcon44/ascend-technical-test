<script>
	import CheckboxInput from '$lib/inputs/checkboxes/CheckboxInput.svelte'

	export let callback, row
</script>

<CheckboxInput {callback} bind:checked={row.selected} />