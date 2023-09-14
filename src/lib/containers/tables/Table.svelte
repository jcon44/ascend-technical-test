<script>
	import { TableBody, TableHeaders } from '$lib/index.js'

	export let list, columns
</script>

<section class="table-container">
	<TableHeaders {list} {columns} />
	<TableBody {list} {columns} />
</section>

<style>
	.table-container {
		border: var(--neutral-stroke-100-s);
		border-radius: var(--border-radius-s);
		gap: 0;
	}
</style>