<script>
	import { Label } from '$lib/index.js'

	export let autofocus = false,
		description = '',
		id = '',
		label = '',
		maxlength = '',
		minlength = '',
		placeholder = '',
		required = false,
		styles = [],
		tabindex = '',
		text = ''
</script>

<div class="text-control">
	<Label
		{id}
		{label}
	/>
	{#if description}
		<div class="body-xs">{description}</div>
	{/if}
	<input
		bind:value={text}
		class="text-input"
		style={styles.join(';')}
		type="text"
		{autofocus}
		{id}
		{maxlength}
		{minlength}
		{placeholder}
		{required}
		{tabindex}
	/>
</div>

<style>
	.text-control {
		display: flex;
		flex-direction: column;
		gap: var(--spacing03);
		width: 100%;
	}
</style>
