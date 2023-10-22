<script>
	import { TableRow } from '$lib/index.js'

	export let callback, columns, list
</script>

<div class="table-body-container">
	{#each list as row, rowIndex}
		<TableRow
			{callback}
			{columns}
			bind:list
			{rowIndex}
		/>
	{/each}
</div>
