<script>
	import ErrorTag from '$lib/index.js'
	import RoleTag from '$lib/index.js'
	import StatusTag from '$lib/index.js'

	export let row
</script>

{#if row?.role?.length}
	<RoleTag role={row?.role} />
{:else if row?.status === 'Error'}
	<ErrorTag errors={row?.errors} />
{:else}
	<StatusTag status={row?.status} />
{/if}
