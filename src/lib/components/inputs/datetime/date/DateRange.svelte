<script>
	import { DatePicker, InputError } from '$lib/index.js'

	export let start,
		end,
		styles = [],
		required = false,
		validValue,
		validationText
</script>

<div
	class="date-range-selector"
	style={styles.join(';')}
>
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
	{#if validValue === false}
		<InputError text={`${validationText}`} />
	{/if}
</div>

<style>
	.date-range {
		display: flex;
		justify-content: space-between;
		gap: var(--spacing09);
	}
</style>
