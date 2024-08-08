<script>
	import { ErrorTag, RoleTag, StatusTag, Tag } from '$lib/index.js'

	export let row
</script>

<div class='tag-array'>
	{#each row.tagArray as tag}
		<Tag content={tag} type='neutral-prominent'/>
	{/each}
</div>

<style>
	.tag-array {
		display: flex;
		gap: var(--spacing03);
	}
</style>