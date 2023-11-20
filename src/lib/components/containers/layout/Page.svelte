<div class="page">
	<slot />
</div>

<style>
	.page {
		align-items: center;
		display: flex;
		flex-direction: column;
		height: calc(100vh - var(--spacing14) - var(--spacing15));
		justify-content: flex-start;
		overflow: auto;
		padding-bottom: var(--spacing15);
		width: 100%;
	}
</style>
