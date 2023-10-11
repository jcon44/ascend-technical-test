<script>
	import { Label } from '$lib/index.js'

	export let id = '',
		label = '',
		phoneNumber = '',
		placeholder = '',
		required = false,
		tabindex = '',
		width = ''
</script>


<div class="phone-number-control">
	<Label {id} {label} />
	<input
		bind:value={phoneNumber}
		class="phone-number-input"
		maxlength="11"
		minlength="11"
		pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
		style={`width:${width}`}
		type="tel"
		{id}
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
