<script>
	export let
		callback = null,
		cols = '',
		label = '',
		name = '',
		placeholder = '',
		required = false,
		rows = '',
		text = ''
</script>


<div class='text-area-input'>
	{#if label}
		<label for={name || label} class='semibold'>
			{label}
		</label>
	{/if}
	<textarea
		bind:value={text}
		name={name || label}
		on:input={callback ? callback : ''}
		cols={cols}
		rows={rows}
		{placeholder}
		{required}
	/>
</div>


<style>
	.text-area-input {
		display: flex;
		flex-direction: column;
	}
	label {
		margin-bottom: var(--spacing03);
	}
	textarea {
		background-color: transparent;
		border-radius: var(--spacing05);
		border: var(--spacing01) solid var(--neutral-100);
		padding-left: var(--spacing07);
		padding-right: var(--spacing07);
		padding-top: var(--spacing05);
		resize: none;
	}
</style>