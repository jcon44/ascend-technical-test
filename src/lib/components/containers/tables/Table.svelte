<script>
	import { TableBody, TableHeaders, TableFooter } from '$lib/index.js'

	export let columns = [],
		list = [],
		chart = false
	export let paging, pageSize, page
	let totalPages = list.length / pageSize;
	let pagedList = list.slice((page - 1) * pageSize, page * pageSize);

	let incrementPage = () => {
		if (page < totalPages) {
			++page;
		}
		pagedList = list.slice((page - 1) * pageSize, page * pageSize);
	}

	let decrementPage = () => {
		if (page > 1) {
			--page;
		}
		pagedList = list.slice((page - 1) * pageSize, page * pageSize);
	}

</script>

<section class="no-gap {chart ? '' : 'table-container'}">
	<TableHeaders
		bind:list
		{columns}
	/>
	{#key pagedList}
		<TableBody
			list={pagedList}
			{columns}
			{paging}
			{pageSize}
			{page}
		/>
	{/key}
</section>
{#if paging}
	<TableFooter
		{paging}
		{pageSize}
		{page}
		{totalPages}
		{incrementPage}
		{decrementPage}
	/>
{/if}

<style>
	.no-gap {
		gap: 0;
	}
	.table-container {
		border: var(--neutral-stroke-100-s);
		border-radius: var(--border-radius-s);
	}
</style>
