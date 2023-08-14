<script>
	export let 
		callback = null,
		defaultOptionName,
		defaultOptionValue,
		optionList,
		selectedValue,
		width = '100%'
</script>

<select
	bind:value={selectedValue}
	on:change={callback}
	style={`
		width:${width};
	`}
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
