<script>
	import { RadioInput } from '$lib/index.js'

	export let item
</script>

<div class="radio-option">
	<RadioInput bind:item={item} />
	<div class="semibold">
		{item.label}
	</div>
</div>

<style>
	.radio-option {
		align-items: center;
		display: flex;
		flex-direction: row;
		gap: var(--spacing04);
		margin-bottom: var(--spacing06);
	}
</style>
