<script>
	import { OkButton } from '$lib/index.js'
	import { getContext } from 'svelte'

	const closeDialog = getContext('Dialog')
</script>

<div class="sample-dialog">
	<p>Sample dialog content</p>
	<p>More sample dialog content</p>
	<OkButton callback={closeDialog} />
</div>

<style>
	.sample-dialog {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 100%;
		gap: var(--spacing05);
	}
</style>
