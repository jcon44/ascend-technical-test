<script>
	import { Label, Tag } from '$lib/index.js'

	export let callback = null,
		description = '',
		cols = '',
		id = '',
		label = '',
		name = '',
		placeholder = '',
		required = false,
		rows = '',
		tag = null,
		text = ''
</script>

<div class="textarea-control">
	<div class='textarea-title'>
		<Label {id} {label} />
		{#if tag !== null}
			<Tag
				content={tag?.content || ''}
				icon={tag?.icon || null}
				side={tag?.side || ''}
				type={tag?.type || ''}
			/>
		{/if}
	</div>
	{#if description}
		<div class='body-xs'>{description}</div>
	{/if}
	<textarea
		bind:value={text}
		class="textarea-content"
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
	.textarea-title {
		display: flex;
		gap: var(--spacing05);
		justify-content: flex-start;
		width: 100%;
	}
	.textarea-control {
		display: flex;
		flex-direction: column;
		gap: var(--spacing03);
		width: 100%;
	}
	.textarea-content {
		background-color: transparent;
		border: 1px solid var(--neutral-100);
		margin: var(--spacing03) var(--spacing05);
		padding: var(--spacing03) var(--spacing05);
		resize: none;
	}
</style>
