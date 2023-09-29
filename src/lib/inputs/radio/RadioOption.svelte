<script>
	import { RadioInput } from '$lib/index.js'

	export let group, label, value
</script>


<div class="radio-option">
	<RadioInput
		bind:group={group}
		{value}
	/>
	<div class="semibold">
		{label}
	</div>
</div>


<style>
	.radio-option {
		align-items: center;
		display: flex;
		flex-direction: row;
		gap: var(--spacing04);
	}
</style>
