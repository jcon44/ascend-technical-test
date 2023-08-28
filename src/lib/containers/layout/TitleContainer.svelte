<div class='title-container'>
	<div class='page-title'>
		<slot />
	</div>
</div>

<style>
	.title-container {
		padding-top: var(--spacing11);
		padding-bottom: var(--spacing10);
		display: flex;
		justify-content: center;
	}
	.page-title {
		display: flex;
		flex-direction: column;
		width: var(--spacing33);
	}
</style>