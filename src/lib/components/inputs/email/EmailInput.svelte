<script>
	import { Label, Tag, InputError } from '$lib/index.js'

	export let email = '',
		id = '',
		label = '',
		placeholder = '',
		required = false,
		styles = [],
		tabindex = '',
		tag = null,
		validValue = true,
		validationText = '',
		validationCallback
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
		on:blur={validationCallback}
		class="email-input"
		pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
		style={styles.join(';')}
		type="email"
		{id}
		{placeholder}
		{required}
		{tabindex}
	/>
	{#if validValue === false}
		<InputError text={`Please enter your ${label}`} />
	{/if}
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
