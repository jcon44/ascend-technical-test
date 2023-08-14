<script>
	import { DatePicker, TimePicker } from '$lib/index.js'

	export let date, time
</script>

<div class="date-time-selector">
	<DatePicker name="date" label="Enter Date" bind:date={date} />
	<TimePicker name="time" label="Enter Time" bind:time={time} />
</div>

<style>
	.date-time-selector {
		display: flex;
		gap: var(--spacing09);
		width: 100%;
	}
</style>