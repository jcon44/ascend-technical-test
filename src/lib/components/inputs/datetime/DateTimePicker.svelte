<script>
	import { DatePicker, TimePicker, InputError } from '$lib/index.js'

	export let date, dateId, required, time, timeId, styles = [], validationText, validValue
</script>

<div 
	class="date-time-selector"
	style={styles.join(';')}
>
	<div class="date-time">
		<DatePicker
			bind:date
			id={dateId}
			label="Enter Date"
			{required}
		/>
		<TimePicker
			bind:time
			id={timeId}
			label="Enter Time"
			{required}
		/>
	</div>
	{#if validValue === false}
		<InputError text={`${validationText}`} />
	{/if}
</div>

<style>
	.date-time-selector {
		width: 100%;
	}
	.date-time {
		display: flex;
		gap: var(--spacing09);
		width: 100%;
	}
</style>
