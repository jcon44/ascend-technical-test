<script>
	import { RadioInput } from '$lib/index.js'

	export let list, group
</script>


<div class="radio-list">
	{#each list as item}
		<div class='list-item'>
			<div class='item-left-column'>
				<RadioInput
					bind:group={group}
					value={item.value}
				/>
			</div>
			<div class='item-right-column'>
				<div class='item-title primary-headline-l-xs semibold'>
					{item.title}
				</div>
				<div class='item-description'>
					{item.description}
				</div>
			</div>
		</div>
	{/each}
</div>


<style>
	.radio-list {
		align-items: flex-start;
		align-self: stretch;
		display: flex;
		flex-direction: column;
		gap: var(--spacing06);
	}
	.list-item {
		display: flex;
		gap: var(--spacing05);
	}
	.item-left-column {
		margin-top: var(--spacing03);
	}
	.item-description {
		margin-top: var(--spacing03);
		margin-bottom: var(--spacing05);
	}
</style>
