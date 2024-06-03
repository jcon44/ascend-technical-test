<script>
	import { DateInput, Label, InputError } from '$lib/index.js'

	export let date,
		id = '',
		label = '',
		styles = [],
		required = false,
		validValue,
		validationText
</script>

<div 
	class="date-picker-selector"
	style={styles.join(';')}
>
	<div class="date-picker">
		<Label
			{id}
			{label}
		/>
		<DateInput
			bind:date
			{id}
			{required}
		/>
	</div>
	{#if validValue === false}
		<InputError text={`${validationText}`} />
	{/if}
</div>

<style>
	.date-picker {
		display: flex;
		flex-direction: column;
		gap: var(--spacing03);
	}
</style>
