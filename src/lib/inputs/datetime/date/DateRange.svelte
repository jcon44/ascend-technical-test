<script>
	import { DatePicker } from '$lib/index.js'

	export let start,
		end,
		required = false,
		width = ''
</script>

<div class="date-range">
	<DatePicker
		bind:date={start}
		id="start-date"
		label="Start Date"
		{required}
		{width}
	/>
	<DatePicker
		bind:date={end}
		id="end-date"
		label="End Date"
		{required}
		{width}
	/>
</div>

<style>
	.date-range {
		display: flex;
		justify-content: space-between;
		gap: var(--spacing09);
	}
</style>
