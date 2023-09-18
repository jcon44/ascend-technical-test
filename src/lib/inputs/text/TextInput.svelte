<script>
	import {  Label } from '$lib/index.js'

	export let
		autofocus=false,
		id='',
		label='',
		placeholder='',
		required=false,
		styles=[],
		tabindex='',
		text=''
</script>

<div class='text-control'>
	<Label {id} {label} />
	<input
		bind:value={text}
		class='text-input'
		style={styles.join(';')}
		type='text'
		{autofocus}
		{id}
		{placeholder}
		{required}
		{tabindex}
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