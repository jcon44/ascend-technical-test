<script>
	import { DateInput, Label } from '$lib/index.js'

	export let date,
		id = '',
		label = '',
		required = false
</script>

<div class="date-picker">
	<Label
		{id}
		{label}
	/>
	<DateInput
		bind:date
		{id}
		{required}
	/>
</div>

<style>
	.date-picker {
		display: flex;
		flex-direction: column;
		gap: var(--spacing03);
	}
</style>
