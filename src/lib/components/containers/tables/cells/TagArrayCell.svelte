<script>
	import { ErrorTag, RoleTag, StatusTag, Tag } from '$lib/index.js'

	export let column, row
</script>

<div class="tag-array">
	{#each row[column.key] as tag}
		<Tag
			content={tag}
			type="neutral-subtle"
		/>
	{/each}
</div>

<style>
	.tag-array {
		display: flex;
		gap: var(--spacing03);
	}
</style>
