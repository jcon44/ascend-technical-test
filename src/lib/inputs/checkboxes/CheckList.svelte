<script>
	import { CheckOption } from 'ascend-ui'

	export let list
</script>


<div class='check-list'>
	{#each list as item}
		<div class='check-item'>
			<CheckOption
				bind:checked={item.selected}
				description={item.description}
				title={item.name}
			/>
			{#if list.component}
				<svelte:component class='check-component' this={item.component} />
			{/if}
		</div>
	{/each}
</div>


<style>
	.check-list {
		display: flex;
		flex-direction: column;
		gap: var(--spacing10);
		max-height: 50vh;
		overflow-y: auto;
	}
	.check-item {
		display: flex;
		flex-direction: column;
		gap: var(--spacing05);
	}
</style>