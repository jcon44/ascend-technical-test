<script>
	import { Label, Tag } from '$lib/index.js'

	export let autofocus = false,
		description = '',
		id = '',
		label = '',
		tag = null,
		maxlength = '',
		minlength = '',
		name = '',
		placeholder = '',
		required = false,
		styles = [],
		tabindex = '',
		password = ''
</script>

<div class="password-control">
	<div class="password-title">
		{#if label}
			<Label
				{id}
				{label}
			/>
		{/if}
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
		<div class="body-xs">{description}</div>
	{/if}
	<!-- svelte-ignore a11y-autofocus -->
	<input
		bind:value={text}
		class="password-input"
		style={styles.join(';')}
		type="password"
		{autofocus}
		{id}
		{name}
		{maxlength}
		{minlength}
		{placeholder}
		{required}
		{tabindex}
	/>
</div>

<style>
	.password-control {
		display: flex;
		flex-direction: column;
		gap: var(--spacing03);
		width: 100%;
	}

	.password-title {
		display: flex;
		gap: var(--spacing05);
		justify-content: flex-start;
		width: 100%;
	}
</style>