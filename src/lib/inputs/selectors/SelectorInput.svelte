<script>
	import { Label } from '$lib/index.js'

	export let callback = null,
		defaultOptionName = '',
		defaultOptionValue = '',
		id = '',
		label = '',
		optionList = [],
		selectedValue = '',
		width = ''
</script>

<div class="selector">
	<Label
		{id}
		{label}
	/>
	<select
		bind:value={selectedValue}
		on:change={callback}
		style={`width:${width}`}
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
</div>

<style>
	select {
		background: none;
		border-radius: var(--spacing05);
		border: var(--spacing01) solid var(--neutral-100);
		padding: var(--spacing05) var(--spacing09);
	}
	select:hover {
		background: var(--neutral-100);
	}
</style>
