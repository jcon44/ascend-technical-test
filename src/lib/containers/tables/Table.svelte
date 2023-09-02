<script>
	import { TableBody, TableHeaders } from '$lib/index.js'

	export let list, columns
</script>

<div class="table-container">
	<TableHeaders bind:list {columns} />
	<TableBody bind:list {columns} />
</div>

<style>
	.table-container {
		margin-left: auto;
		margin-right: auto;
		width: var(--spacing33);
	}
</style>