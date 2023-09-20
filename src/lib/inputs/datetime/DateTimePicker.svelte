<script>
	import { DatePicker, TimePicker } from '$lib/index.js'

	export let date, dateId, required, time, timeId
</script>

<div class="date-time-selector">
	<DatePicker
		bind:date={date}
		id={dateId}
		label="Enter Date"
		{required}
	/>
	<TimePicker
		bind:time={time}
		id={timeId}
		label="Enter Time"
		{required}
	/>
</div>

<style>
	.date-time-selector {
		display: flex;
		gap: var(--spacing09);
		width: 100%;
	}
</style>