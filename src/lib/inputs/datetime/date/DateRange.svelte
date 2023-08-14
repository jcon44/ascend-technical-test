<script>
	import { DatePicker } from '$lib/index.js';

	export let startDate, endDate, width='100%';
</script>

<div class="date-range">
	<DatePicker bind:date={startDate} label="Start Date" name="start-date" {width} />
	<DatePicker bind:date={endDate} label="End Date" name="end-date" {width} />
</div>

<style>
	.date-range {
		display: flex;
		justify-content: space-between;
		gap: var(--spacing09);
	}
</style>
