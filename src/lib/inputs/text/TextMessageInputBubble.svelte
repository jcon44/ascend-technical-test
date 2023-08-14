<script>
	import { TextAreaInput, TextMessageBubble } from '$lib/index.js'

	export let characterLimit = 160,
		cols = '',
		placeholder = 'Enter Text Message',
		rows = '',
		text = ''
</script>


<TextMessageBubble>
	<TextAreaInput
		bind:text={text}
		{cols}
		{placeholder}
		{rows}
	/>
	{#if characterLimit}
		<div class={`characters-remaining ${text.length > characterLimit ? 'error' : ''}`}>
			{text.length}/{characterLimit}
		</div>
	{/if}
</TextMessageBubble>


<style>
	.characters-remaining {
		color: var(--neutral-400);
		font-size: var(--body-small-xs-font-size);
		font-weight: 600;
		line-height: 150%;
		padding-bottom: var(--spacing05);
		padding-right: var(--spacing09);
		text-align: right;
		width: 100%;
	}
	.error {
		color: var(--error-700);
	}
</style>
