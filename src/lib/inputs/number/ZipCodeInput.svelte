<script>
	import { Label } from '$lib/index.js'

	export let autofocus = false,
		id = 'zip-code',
		label = 'Zip Code',
		placeholder = '',
		required = false,
		tabindex = '',
		valid = true,
		zip = ''
</script>

<div class="zip-control">
	<Label
		{id}
		{label}
	/>
	<input
		bind:value={zip}
		class="zip-input"
		maxlength="5"
		minlength="5"
		type="text"
		{autofocus}
		{id}
		{placeholder}
		{required}
		{tabindex}
	/>
</div>

<style>
	.zip-control {
		display: flex;
		flex-direction: column;
		gap: var(--spacing03);
		width: 12ch;
	}
</style>
