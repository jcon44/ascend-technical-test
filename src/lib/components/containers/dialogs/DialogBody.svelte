<div class="dialog-body">
	<slot />
</div>

<style>
	.dialog-body {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		overflow-y: auto;
		padding: var(--spacing09);
		width: 100%;
		max-height: 72vh;
	}

	@media screen and (min-width: 768px) {
		.dialog-body {
			padding: var(--spacing09) var(--spacing11);
		}
	}
</style>
