<div class='dialog-body'>
	<slot />
</div>

<style>
	.dialog-body {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		overflow-y: auto;
		padding: var(--spacing09) var(--spacing11);
		width: 100%;
	}
</style>