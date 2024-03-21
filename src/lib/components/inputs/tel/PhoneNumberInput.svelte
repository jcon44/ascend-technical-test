<script>
	import { Label, InputError } from '$lib/index.js'

	export let id = '',
		label = '',
		maxlength = '10',
		minlength = '10',
		phoneNumber = '',
		placeholder = '',
		required = false,
		styles = [],
		tabindex = '',
		validationCallback,
		validValue

	function digitsOnly() {
		if (phoneNumber.length) {
			phoneNumber = phoneNumber.replace(/[^0-9]/g, '')
		}
	}
</script>

<div class="phone-number-control">
	<Label
		{id}
		{label}
	/>
	<input
		bind:value={phoneNumber}
		on:keyup={digitsOnly}
		on:blur={validationCallback}
		class="phone-number-input {validValue === false ? 'error' : ''}"
		style={styles.join(';')}
		pattern={`^[0-9]{10}$`}
		type="tel"
		{id}
		{maxlength}
		{minlength}
		{placeholder}
		{required}
		{tabindex}
	/>
	{#if validValue === false}
		<InputError text={`Please enter your ${label}`} />
	{/if}
</div>

<style>
	.phone-number-control {
		display: flex;
		flex-direction: column;
		gap: var(--spacing03);
	}
</style>
