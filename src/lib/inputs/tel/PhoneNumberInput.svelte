<script>
	import { InputLabel } from '$lib/index.js'

	export let
		id='',
		label='',
		phoneNumber='',
		placeholder='',
		required=false,
		width=''
</script>

<div class='phone-number-control'>
	<InputLabel {id} {label} />
	<input
		type="tel"
		bind:value={phoneNumber}
		class="phone-number-input"
		maxlength="11"
		minlength="11"
		placeholder={placeholder}
		style={`width:${width}`}
		{id}
		{required}
	/>
</div>

<style>
	.phone-number-input {
		display: flex;
		gap: var(--spacing07);
	}
</style>
