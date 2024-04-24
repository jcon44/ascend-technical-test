<script>
	import { TableRow } from '$lib/index.js'

	export let columns, list
</script>

<div class="table-body-container">
	{#each list as row, rowIndex (row.id || rowIndex)}
		<TableRow
			{columns}
			bind:list
			{rowIndex}
		/>
	{/each}
</div>
