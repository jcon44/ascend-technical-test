<script>
	// list = [{
	// 	component: SvelteComponent,
	// 	description: String,
	// 	label: String,
	// 	name: String,
	// 	selected: Boolean,
	// 	value: String
	// }]

	import { CheckOption } from '$lib/index.js'

	export let callback, list = [], styles = []
</script>

<div
	class="check-list"
	style={styles.join(';')}
>
	{#each list as item}
		<div class="check-item">
			<CheckOption
				bind:checked={item.selected}
				description={item.description}
				name={item.name}
				value={item.value}
				{callback}
			/>
			{#if list.component}
				<svelte:component
					this={item.component}
					class="check-component"
				/>
			{/if}
		</div>
	{/each}
</div>

<style>
	.check-list {
		display: flex;
		flex-direction: column;
		gap: var(--spacing10);
	}
	.check-item {
		display: flex;
		flex-direction: column;
		gap: var(--spacing05);
	}
</style>
