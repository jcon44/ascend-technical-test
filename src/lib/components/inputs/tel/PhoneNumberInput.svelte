<script>
	import { Label } from '$lib/index.js'

	export let id = '',
		label = '',
		maxlength = "10",
		minlength = "10",
		phoneNumber = '',
		placeholder = '',
		required = false,
		styles = [],
		tabindex = ''

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
		class="phone-number-input"
		style={styles.join(';')}
		pattern={`^[0-9]{10}$`}
		type="tel"
		{id}
		maxlength={maxlength}
		minlength={minlength}
		{placeholder}
		{required}
		{tabindex}
	/>
</div>

<style>
	.phone-number-control {
		display: flex;
		flex-direction: column;
		gap: var(--spacing03);
	}
</style>
