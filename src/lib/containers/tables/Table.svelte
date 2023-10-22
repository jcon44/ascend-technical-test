<script>
	import { TableBody, TableHeaders } from '$lib/index.js'

	export let callback = null,
		columns = [],
		list = []
</script>

<section class="table-container">
	<TableHeaders
		bind:list
		{callback}
		{columns}
	/>
	<TableBody
		bind:list
		{callback}
		{columns}
	/>
</section>

<style>
	.table-container {
		border: var(--neutral-stroke-100-s);
		border-radius: var(--border-radius-s);
		gap: 0;
	}
</style>
