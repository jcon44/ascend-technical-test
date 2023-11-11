<script>
	import { LinkButton, StandardButton } from '$lib/index.js'

	export let
		bottomIcon = null,	
		callback = null,
		classes = ['btn-fit', 'btn-m', 'btn-primary', 'btn-rect'],
		disabled = false,
		leftIcon = null,
		rightIcon = null,
		styles = [],
		text = '',
		topIcon = null,
		url = ''
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
	on:click={callback || ''}
	on:keypress={callback || ''}
	class={`button-wrapper ${classes.includes('btn-full') ? 'btn-full' : 'btn-fit'}`}
>
	{#if url?.length}
		<LinkButton
			{bottomIcon}
			{classes}
			{disabled}
			{leftIcon}
			{rightIcon}
			{styles}
			{text}
			{topIcon}
			{url}
		/>
	{:else}
		<StandardButton
			{bottomIcon}
			{classes}
			{disabled}
			{leftIcon}
			{rightIcon}
			{styles}
			{text}
			{topIcon}
		/>
	{/if}
</div>
