<script>
	import { DatePicker } from '$lib/index.js'

	export let start,
		end,
		required = false
</script>

<div class="date-range">
	<DatePicker
		bind:date={start}
		id="start-date"
		label="Start Date"
		{required}
	/>
	<DatePicker
		bind:date={end}
		id="end-date"
		label="End Date"
		{required}
	/>
</div>

<style>
	.date-range {
		display: flex;
		justify-content: space-between;
		gap: var(--spacing09);
	}
</style>
