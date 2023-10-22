<script>
	import { DateInput, Label } from '$lib/index.js'

	export let date,
		id = '',
		label = '',
		required = false,
		width = ''
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
		{width}
	/>
</div>

<style>
	.date-picker {
		display: flex;
		flex-direction: column;
		gap: var(--spacing03);
	}
</style>
