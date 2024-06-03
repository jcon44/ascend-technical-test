<script>
	import { Label, Tag, InputError } from '$lib/index.js'

	export let autofocus = false,
		description = '',
		id = '',
		label = '',
		tag = null,
		name = '',
		placeholder = '',
		required = false,
		styles = [],
		tabindex = '',
		url = '',
		validValue, 
		validationText
</script>

<div 
	class="url-control"
	style={styles.join(';')}
>
	<div class="url-title">
		<div class="url-title">
			<Label
				{id}
				{label}
			/>
			{#if tag !== null}
				<Tag
					content={tag?.content || ''}
					icon={tag?.icon || null}
					side={tag?.side || ''}
					type={tag?.type || ''}
				/>
			{/if}
		</div>
	</div>

	{#if description}
		<div class="body-xs">{description}</div>
	{/if}
	<!-- svelte-ignore a11y-autofocus -->
	<input
		bind:value={url}
		class="url-input"
		type="url"
		pattern="https://.*"
		{autofocus}
		{id}
		{name}
		{placeholder}
		{required}
		{tabindex}
	/>
	{#if validValue === false}
		<InputError text={`${validationText}`} />
	{/if}
</div>

<style>
	.url-control {
		display: flex;
		flex-direction: column;
		gap: var(--spacing03);
		width: 100%;
	}

	.url-title {
		display: flex;
		gap: var(--spacing05);
		justify-content: flex-start;
		width: 100%;
	}

	.url-input {
		width: 100%;
	}
</style>
