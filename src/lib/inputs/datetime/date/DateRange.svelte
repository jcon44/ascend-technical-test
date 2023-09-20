<script>
	import { DatePicker } from '$lib/index.js'

	export let startDate, endDate, required=false, width=''
</script>

<div class="date-range">
	<DatePicker
		bind:date={startDate}
		id="start-date"
		label="Start Date"
		{required}
		{width}
	/>
	<DatePicker
		bind:date={endDate}
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
