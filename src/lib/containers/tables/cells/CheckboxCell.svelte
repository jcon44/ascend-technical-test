<script>
	import CheckboxInput from '$lib/inputs/checkboxes/CheckboxInput.svelte'

	export let cellData
</script>

<CheckboxInput bind:checked={cellData.row.selected} />