<script>
	export let id='', label=''
</script>

{#if id}
	<label class='semibold' from={id}>
		{label}
	</label>
{/if}