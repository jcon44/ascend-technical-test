<script>
	import { formatDate } from '$lib/index.js'

	export let column, row
</script>

<div class={`${column?.classes?.join(' ')}`} style={column?.styles?.join(';')}>
	{formatDate(row[column.key]) || ' '}
</div>
