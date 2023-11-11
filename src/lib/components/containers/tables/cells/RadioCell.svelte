<script>
	import RadioInput from '$lib/components/inputs/radio/RadioInput.svelte'

	export let callback, group, value
</script>

<RadioInput
	bind:group
	{callback}
	{value}
/>
