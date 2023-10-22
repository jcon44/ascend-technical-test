<script>
	import { CheckExtraSmallIcon } from '$lib/index.js'

	export let callback = null,
		checked = false,
		value = ''

	function checkBox() {
		checked = !checked
		if (callback) callback(checked, value)
	}
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
	class="checkbox-container"
	on:click={checkBox}
	on:keyup={checkBox}
>
	<input
		type="checkbox"
		bind:checked
		{value}
	/>
	<div
		class="checkmark"
		style={`background-color: ${checked ? 'var(--primary-500);' : ''}`}
	>
		{#if checked}
			<CheckExtraSmallIcon />
		{/if}
	</div>
</div>

<style>
	.checkbox-container {
		align-items: center;
		border-radius: var(--spacing02);
		border: var(--spacing00) solid var(--neutral-100);
		cursor: pointer;
		display: flex;
		height: var(--spacing09);
		justify-content: center;
		user-select: none;
		width: var(--spacing09);
	}
	.checkbox-container:focus {
		border: 3px solid var(--primary-500);
		background-color: red;
	}
	.checkbox-container:hover {
		box-shadow: 0px 0px 0px var(--spacing00) var(--primary-400);
	}
	/* Hide default checkbox */
	input[type='checkbox'] {
		cursor: pointer;
		height: 0;
		opacity: 0;
		position: absolute;
		width: 0;
	}
	.checkmark {
		align-items: center;
		border-radius: var(--spacing02);
		display: flex;
		height: var(--spacing09);
		justify-content: center;
		width: var(--spacing09);
	}
	input:focus + .checkmark {
		border: var(--spacing01) solid var(--primary-500);
	}
</style>
