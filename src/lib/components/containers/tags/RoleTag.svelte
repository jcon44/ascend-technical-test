<script>
	import { Tag } from '$lib/index.js'

	export let role = ''
</script>

<Tag
	type={`neutral-subtle`}
	bind:content={role}
/>
