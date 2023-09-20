<script>
	export let id='', label=''
</script>

{#if id}
	<label class='semibold' for={id}>
		{label}
	</label>
{/if}