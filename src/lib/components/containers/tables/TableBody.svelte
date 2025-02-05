<script>
	import { TableRow } from '$lib/index.js'

	export let columns, list
</script>

<div class="table-body-container">
	{#key pagedList}
		{#each list as row, rowIndex (row.id || rowIndex)}
			{#if row.display || row?.display === undefined}
				<TableRow
					{list}
					{columns}
					{rowIndex}
				/>
			{/if}
		{/each}
	{/key}
</div>
