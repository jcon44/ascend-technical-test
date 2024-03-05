<script>
	import { Label, Tag } from '$lib/index.js'

	export let email = '',
		id = '',
		label = '',
		placeholder = '',
		required = false,
		styles = [],
		tabindex = '',
		tag = null
</script>

<div class="email-control">
	<div class="email-title">
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
	<input
		bind:value={email}
		class="email-input"
		style={styles.join(';')}
		type="email"
		pattern="^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{(2, 4)}$"
		{id}
		{placeholder}
		{required}
		{tabindex}
	/>
</div>

<style>
	.email-control {
		display: flex;
		flex-direction: column;
		gap: var(--spacing03);
	}

	.email-title {
		display: flex;
		gap: var(--spacing05);
		justify-content: flex-start;
		width: 100%;
	}
</style>
