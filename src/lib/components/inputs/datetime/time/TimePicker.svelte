<script>
	import { TimeInput, Label, InputError } from '$lib/index.js'

	export let id = '',
		label = '',
		required = false,
		styles = [],
		time = '',
		validValue, 
		validationText
</script>

<div 
	class="time-picker-selector" 
	style={styles.join(';')}
>
	<div class="time-picker">
		<Label
			{id}
			{label}
		/>
		<TimeInput
			bind:time
			{id}
			{required}
		/>
	</div>
	{#if validValue === false}
		<InputError text={`${validationText}`} />
	{/if}
</div>

<style>
	.time-picker-selector {
		width: 100%;
	}

	.time-picker {
		display: flex;
		gap: var(--spacing03);
		flex-direction: column;
		width: 100%;
	}
</style>
