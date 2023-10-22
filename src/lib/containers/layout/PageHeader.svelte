<script>
	export let titleText = '',
		paragraphText = '',
		headerButton = null,
		headerPill = null
</script>

<div class="page-header">
	<div
		class="page-header-top-row"
		style={`justify-content: ${headerButton ? 'space-between' : 'center'}`}
	>
		<div class="page-header-left-column">
			<h1 class="headline-l-xxl">{titleText}</h1>
		</div>
		{#if headerButton}
			<div class="page-header-right-column">
				{#if headerButton}
					<svelte:component this={headerButton} />
				{/if}
			</div>
		{/if}
	</div>
	{#if headerPill || paragraphText}
		<div class="page-header-middle-row">
			{#if headerPill}
				<svelte:component this={headerPill} />
			{/if}
			{#if paragraphText}
				<p>{paragraphText}</p>
			{/if}
		</div>
	{/if}
	<div class="page-header-bottom-row">
		<slot />
	</div>
</div>
