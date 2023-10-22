<script>
	import { CheckboxInput } from '$lib/index.js'

	export let name = '',
		description = '',
		checked = false
</script>

<div class="checkbox-option">
	<div class="left-option-column">
		<CheckboxInput bind:checked />
	</div>
	<div class="right-option-column">
		<div class="option-name semibold">{name}</div>
		{#if description}
			<div class="option-description">{description}</div>
		{/if}
	</div>
</div>

<style>
	.checkbox-option {
		display: flex;
		flex-direction: row;
		gap: var(--spacing05);
	}
	.left-option-column {
		align-items: top;
		display: flex;
		justify-content: left;
		width: var(--spacing09);
	}
	.right-option-column {
		display: flex;
		flex-direction: column;
	}
</style>
