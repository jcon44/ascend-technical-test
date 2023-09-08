<script>
	import { DatePicker } from '$lib/index.js'

	export let startDate, endDate, width=''
</script>

<div class="date-range">
	<DatePicker bind:date={startDate} label="Start Date" id="start-date" {width} />
	<DatePicker bind:date={endDate} label="End Date" id="end-date" {width} />
</div>

<style>
	.date-range {
		display: flex;
		justify-content: space-between;
		gap: var(--spacing09);
	}
</style>
