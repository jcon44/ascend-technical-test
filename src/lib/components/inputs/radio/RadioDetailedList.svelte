<script>
	// group: String
	//
	// list = [{
	// 	component: SvelteComponent,
	// 	description: String,
	// 	label: String,
	// 	name: String,
	// 	selected: Boolean,
	// 	value: String
	// }]

	import { RadioInput, InputError } from '$lib/index.js'

	export let list = [],
		group = '',
		validValue,
		validationText

	function selectValue(value) {
		group = value
	}
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="radio-list">
	{#each list as item}
		<div
			class="list-item"
			on:click|stopPropagation={() => selectValue(item.value)}
			on:keyup|stopPropagation={() => selectValue(item.value)}
		>
			<div class="item-left-column">
				<RadioInput
					bind:group
					value={item.value}
				/>
			</div>
			<div class="item-right-column">
				<div class="item-title primary-headline-l-xs semibold">
					{item.name}
				</div>
				<div class="item-description">
					{item.description}
				</div>
			</div>
		</div>
	{/each}
	{#if validValue === false}
		<InputError text={`${validationText}`} />
	{/if}
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
