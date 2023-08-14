<script>
	import { CloseButton } from '$lib/index.js';

	export let title, closeDialog
</script>

<div class="dialog-header">
	<div class="headline-l-xl">
		{title}
	</div>
	<form method="dialog">
		<CloseButton callback={closeDialog} />
	</form>
</div>

<style>
	.dialog-header {
		border-bottom: var(--spacing00) solid var(--neutral-050);
		display: flex;
		justify-content: space-between;
		padding: var(--spacing09) var(--spacing09) var(--spacing09) var(--spacing11);
		width: 100%;
	}
</style>