<script>
	import { InputLabel } from '$lib/index.js'

	export let
		id='',
		label='',
		phoneNumber='',
		placeholder='',
		required=false,
		width='100%'
</script>

<div class="phone-number-input">
	<InputLabel {id} {label} />
	<input
		type="tel"
		bind:value={phoneNumber}
		maxlength="11"
		minlength="11"
		placeholder={placeholder}
		style={`width:${width}`}
		{id}
		{required}
	/>
</div>

<style>
	input {
		border: var(--spacing01) solid var(--neutral-100);
		border-radius: var(--spacing05);
		padding: var(--spacing05) var(--spacing09);
	}
	.phone-number-input {
		display: flex;
		gap: var(--spacing07);
	}
</style>
