<script>
	import { InputLabel } from '$lib/index.js'

	export let
		callback = null,
		cols = '',
		id = '',
		label = '',
		name = '',
		placeholder = '',
		required = false,
		rows = '',
		text = ''
</script>

<div class='text-area-input'>
	<InputLabel {id} {label} />
	<textarea
		bind:value={text}
		name={name || label}
		on:input={callback || ''}
		cols={cols}
		rows={rows}
		{id}
		{placeholder}
		{required}
	/>
</div>

<style>
	.text-area-input {
		display: flex;
		flex-direction: column;
	}
	label {
		margin-bottom: var(--spacing03);
	}
	textarea {
		background-color: transparent;
		border-radius: var(--spacing05);
		border: var(--spacing01) solid var(--neutral-100);
		padding-left: var(--spacing07);
		padding-right: var(--spacing07);
		padding-top: var(--spacing05);
		resize: none;
	}
</style>