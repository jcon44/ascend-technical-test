<script>
	import { CardGrid } from '$lib/index.js'

	export let cardComponent, list
</script>

<CardGrid>
	{#each list as item (item.id)}
		<svelte:component
			this={cardComponent}
			data={item}
			url={item?.link || ''}
		/>
	{/each}
</CardGrid>
