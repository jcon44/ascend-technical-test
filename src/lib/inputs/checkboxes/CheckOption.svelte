<script>
	import { CheckboxInput } from '$lib/index.js'

	export let title, description, checked
</script>


<div class="checkbox-option">
	<div class="left-option-column">
		<CheckboxInput bind:checked={checked} />
	</div>
	<div class="right-option-column">
		<div class="option-title headline-l-xs semibold">{title}</div>
		<div class="option-description">{description}</div>
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
