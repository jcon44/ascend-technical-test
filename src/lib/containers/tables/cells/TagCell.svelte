<script>
	import ErrorTag from '$lib/containers/tags/ErrorTag.svelte'
	import StatusTag from '$lib/containers/tags/StatusTag.svelte'

	export let cellData
</script>

{#if cellData?.row?.status === 'Error'}
	<ErrorTag errors={cellData.errors} />
{:else}
	<StatusTag status={cellData?.row?.status} time={cellData?.time || ''} />
{/if}