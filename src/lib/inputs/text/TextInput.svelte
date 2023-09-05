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

<div class='text-control'>
	<InputLabel {id} {label} />
	<input
		type='text'
		class='text-input'
		style={`
			height:${height};
			width:${width};
		`}
		bind:value={text}
		{id}
		{placeholder}
		{required}
	>
</div>

<style>
	.text-control {
		display: flex;
		flex-direction: column;
		height: var(--spacing12);
		gap: var(--spacing03);
		width: 100%;
	}
</style>