<script>
	import { CharacterCounter, TextAreaInput, TextMessageBubble } from '$lib/index.js'

	export let characterLimit = 160,
		cols = '',
		placeholder = 'Enter Text Message',
		rows = '',
		text = ''
</script>


<div class='text-message-bubble'>
	<TextMessageBubble>
		<TextAreaInput
			bind:text
			{cols}
			{placeholder}
			{rows}
		/>
	</TextMessageBubble>
	{#if characterLimit}
		<div class='text-counter'>
			<CharacterCounter {characterLimit} {text} />
		</div>
	{/if}
</div>


<style>
	.text-message-bubble {
		display: flex;
		flex-direction: column;
		gap: var(--spacing);
	}
	.text-counter {
		position: relative;
		top: calc(var(--spacing03) * -1);
	}
</style>