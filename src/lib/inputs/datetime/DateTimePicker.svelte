<script>
	import { DatePicker, TimePicker } from '$lib/index.js'

	export let date, dateId, time, timeId
</script>

<div class="date-time-selector">
	<DatePicker name="date" label="Enter Date" bind:date={date} id={dateId} />
	<TimePicker name="time" label="Enter Time" bind:time={time} id={timeId} />
</div>

<style>
	.date-time-selector {
		display: flex;
		gap: var(--spacing09);
		width: 100%;
	}
</style>