<script>
	import { Label } from '$lib/index.js'

	export let callback = null,
		cols = '',
		id = '',
		label = '',
		name = '',
		placeholder = '',
		required = false,
		rows = '',
		text = ''
</script>

<div class="textarea-control">
	<Label {id} {label} />
	<textarea
		bind:value={text}
		class="textarea-input"
		name={name || label}
		on:input={callback || ''}
		{cols}
		{rows}
		{id}
		{placeholder}
		{required}
	/>
</div>

<style>
	.textarea-control {
		display: flex;
		flex-direction: column;
		gap: var(--spacing03);
		width: 100%;
	}
	.textarea-input {
		background-color: transparent;
		resize: none;
	}
</style>
