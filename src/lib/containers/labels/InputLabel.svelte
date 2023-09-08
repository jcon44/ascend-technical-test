<script>
	export let id='', label=''
</script>

{#if id}
	<label class='input-label semibold' for={id}>
		{label}
	</label>
{/if}

<style>
	.input-label {
		margin-bottom: var(--spacing03);
	}
</style>