<script>
	import { Label, InputError } from '$lib/index.js'

	export let autofocus = false,
		changeCallback = null,
		description = '',
		id = '',
		label = '',
		max,
		min,
		placeholder = '',
		required = false,
		step = 1,
		styles = [],
		tabindex = '',
		validValue = true,
		validationCallback = null,
		validationText = '',
		value = ''
</script>

<div
	class="number-control"
	style={styles.join(';')}
>
	<div class="text-title">
		{#if label}
			<Label
				{id}
				{label}
			/>
		{/if}
	</div>
	{#if description}
		<div class="body-xs">{description}</div>
	{/if}
	<!-- svelte-ignore a11y-autofocus -->
	<input
		bind:value={value}
		class="number-input"
		max={max}
		min={min}
		on:blur={validationCallback}
		on:change={changeCallback}
		step={step}
		type="number"
		{autofocus}
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
	.number-control {
		display: flex;
		flex-direction: column;
		gap: var(--spacing03);
		width: 100%;
	}

	.number-input {
		-moz-appearance: textfield;
		appearance: textfield;
	}

	.number-input::-webkit-outer-spin-button,
	.number-input::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}
</style>
