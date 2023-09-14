<script>
	import CheckboxInput from '$lib/inputs/checkboxes/CheckboxInput.svelte'

	export let cellData

	$: selected = cellData?.row?.selected || false
</script>

<CheckboxInput bind:checked={selected} />