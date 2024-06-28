<script>
	import { Label, Tag, InputError } from '$lib/index.js'

	export let id = '',
		label = '',
		tag = null,
		maxlength = '10',
		minlength = '10',
		phoneNumber = '',
		placeholder = '',
		required = false,
		styles = [],
		tabindex = '',
		validationText = '',
		validationCallback,
		validValue = true

	function digitsOnly() {
		if (phoneNumber.length) {
			phoneNumber = phoneNumber.replace(/[^0-9]/g, '')
		}
	}
</script>

<div class="phone-number-control">
	<div class="phone-number-title">
		{#if label}
			<Label
				{id}
				{label}
			/>
		{/if}
		{#if tag !== null}
			<Tag
				content={tag?.content || ''}
				icon={tag?.icon || null}
				side={tag?.side || ''}
				type={tag?.type || ''}
			/>
		{/if}
	</div>
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
		<InputError text={`${validationText}`} />
	{/if}
</div>

<style>
	.phone-number-control {
		display: flex;
		flex-direction: column;
		gap: var(--spacing03);
	}

	.phone-number-title {
		display: flex;
		gap: var(--spacing05);
		justify-content: flex-start;
		width: 100%;
	}
</style>
