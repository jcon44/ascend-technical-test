<script>
	export let
		callback = undefined,
		classes = [],
		height = '',
		icon = undefined,
		link = '',
		title = '',
		width = ''
</script>


{#if link}
	<a href={link}>
		<div class={`card ${classes?.join(' ') ?? ''}`}
			on:click={callback ? callback : ''}
			on:keyup={callback ? callback : ''}
			style={`
				${(height ? `height: ${height};` : '')}
				${(width ? `width: ${width};` : '')}
			`}
		>
			{#if icon}
				<div class='card-icon'>
					<svelte:component this={icon} />
				</div>
			{/if}
			{#if title}
				<div class='card-title headline-s-m'>
					{title}
				</div>
			{/if}
			<div class='card-content body-s-s'>
				<slot />
			</div>
		</div>
	</a>
{:else}
	<div class={`card ${classes?.join(' ') ?? ''}`}
		on:click={callback ? callback : ''}
		on:keyup={callback ? callback : ''}
		style={`
			${(height ? `height: ${height};` : '')}
			${(width ? `width: ${width};` : '')}
		`}
	>
		{#if icon}
			<div class='card-icon'>
				<svelte:component this={icon} />
			</div>
		{/if}
		{#if title}
			<div class='card-title headline-s-m'>
				{title}
			</div>
		{/if}
		<div class='card-content body-s-s'>
			<slot />
		</div>
	</div>
{/if}


<style>
	.card {
		align-items: flex-start;
		background-color: var(--white-trans-900);
		border-radius: var(--spacing10);
		border: var(--spacing00) solid var(--neutral-trans-100);
		box-shadow: var(--neutral-shadow-s);
		display: flex;
		flex-direction: column;
		gap: var(--spacing11);
		max-width: var(--spacing27);
	}
	.card:hover {
		box-shadow: var(--neutral-shadow-m);
		text-decoration: none;
	}
	.card-l {
		padding: var(--spacing11);
		min-width: var(--spacing27);
		min-height: var(--spacing24);
	}
	.card-s {
		padding: var(--spacing09);
		width: var(--spacing22);
	}
	.card-title {
		color: var(--neutral-base);
	}
	.card-content {
		width: 100%;
	}
	a {
		text-decoration: none;
	}
</style>
