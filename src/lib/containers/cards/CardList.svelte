<div class='list-container'>
	<div class="card-list">
		<slot />
	</div>
</div>

<style>
	.list-container {
		display: flex;
		justify-content: space-around;
	}
	.card-list {
		display: flex;
		flex-wrap: wrap;
		gap: var(--spacing10);
		justify-content: center;
		width: var(--spacing33);
	}
</style>
