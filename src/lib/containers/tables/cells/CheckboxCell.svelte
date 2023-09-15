<script>
	import CheckboxInput from '$lib/inputs/checkboxes/CheckboxInput.svelte'

	export let row
</script>

<CheckboxInput bind:checked={row.selected} />