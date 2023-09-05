<script>
	import { InputLabel } from '$lib/index.js'

	export let
		height='',
		id='',
		label='',
		placeholder='',
		required=false,
		text='',
		width=''
</script>

<div class='text-input'>
	<InputLabel {id} {label} />
	<input
		type='text'
		{id}
		style={`
			height:${height};
			width:${width};
		`}
		bind:value={text}
		{placeholder}
		{required}
	>
</div>

<style>
	.text-input {
		display: flex;
		flex-direction: column;
		height: var(--spacing12);
		gap: var(--spacing03);
		width: 100%;
	}
	input {
		border: var(--spacing01) solid var(--neutral-100);
		border-radius: var(--spacing05);
		padding: var(--spacing05) var(--spacing09);
	}
</style>