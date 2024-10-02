<script>
	import { formatTimeStamp } from '$lib/index.js'

	export let column, row
</script>

<div
	class={`${column?.classes?.join(' ')}`}
	style={column?.styles?.join(';')}
>
	{formatTimeStamp(row[column.key], true) || ' '}
</div>