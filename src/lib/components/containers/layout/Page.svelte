<div class="page">
	<slot />
</div>

<style>
	.page {
		align-items: center;
		display: flex;
		flex-direction: column;
		height: 100%;
		justify-content: flex-start;
		max-height: 100vh;
		overflow: auto;
		width: 100%;
	}
</style>
