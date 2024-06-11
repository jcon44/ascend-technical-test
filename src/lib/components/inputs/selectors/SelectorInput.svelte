<script>
	import { Label, InputError } from '$lib/index.js'

	export let callback = null,
		defaultOptionName = '',
		defaultOptionValue = '',
		id = '',
		label = '',
		optionList = [],
		selectedValue = '',
		styles = [],
		validValue,
		validationText,
		validationCallback
</script>

<div class="selector-control">
	<Label
		{id}
		{label}
	/>
	<select
		bind:value={selectedValue}
		on:change={callback}
		on:blur={validationCallback}
		style={styles.join(';')}
		{id}
	>
		<option
			selected
			value={defaultOptionValue}
		>
			{defaultOptionName}
		</option>
		{#each optionList as optionItem}
			<option value={optionItem}>
				{optionItem}
			</option>
		{/each}
	</select>
	{#if validValue === false}
		<InputError text={`${validationText}`} />
	{/if}
</div>

<style>
	.selector-control {
		display: flex;
		flex-direction: column;
		gap: var(--spacing03);
		width: 100%;
	}
	select {
		background: none;
		border-radius: var(--spacing05);
		border: var(--spacing00) solid var(--neutral-100);
		padding: var(--spacing05) var(--spacing09);
	}
	select:hover {
		background: var(--neutral-100);
	}
</style>
