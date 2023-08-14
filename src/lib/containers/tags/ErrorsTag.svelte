<script>
	import { Tag } from '$lib/index.js'

	export let errorCount
</script>

<Tag content={`${errorCount} Errors`} type="error-subtle" />
