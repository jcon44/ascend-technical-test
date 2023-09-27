<section class="list-container">
	<div class="card-grid">
		<slot />
	</div>
</section>

<style>
	.list-container {
		display: flex;
		justify-content: space-around;
	}
	.card-grid {
		display: flex;
		flex-wrap: wrap;
		gap: var(--spacing09);
		justify-content: flex-start;
	}
</style>
