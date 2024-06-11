<script>
	import { Label, InputError } from '$lib/index.js'

	export let autofocus = false,
		id = 'zip-code',
		label = 'Zip Code',
		styles = [],
		placeholder = '',
		required = false,
		tabindex = '',
		validValue,
		validationText,
		zip = ''
</script>

<div
	class="zip-control"
	style={styles.join(';')}
>
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
		{id}
		{placeholder}
		{required}
		{tabindex}
	/>
	{#if validValue === false}
		<InputError text={`${validationText}`} />
	{/if}
</div>

<style>
	.zip-control {
		display: flex;
		flex-direction: column;
		gap: var(--spacing03);
		width: 12ch;
	}
</style>
