<script>
	import { InputLabel } from '$lib/index.js'

	export let
		callback=null,
		cols='',
		id='',
		label='',
		name='',
		placeholder='',
		required=false,
		rows='',
		text=''
</script>

<div class='textarea-control'>
	<InputLabel {id} {label} />
	<textarea
		bind:value={text}
		class='textarea-input'
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
	.textarea-control {
		display: flex;
		flex-direction: column;
	}
	.textarea-input {
		background-color: transparent;
		resize: none;
	}
</style>