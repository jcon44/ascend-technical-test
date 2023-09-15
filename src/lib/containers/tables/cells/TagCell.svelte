<script>
	import ErrorTag from '$lib/containers/tags/ErrorTag.svelte'
	import StatusTag from '$lib/containers/tags/StatusTag.svelte'

	export let row
</script>

{#if row?.status === 'Error'}
	<ErrorTag errors={row?.errors} />
{:else}
	<StatusTag status={row?.status} />
{/if}