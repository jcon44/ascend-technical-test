<script>
	export let styles = []
</script>

<div
	class="page"
	style={styles.join(';')}
>
	<slot />
</div>

<style>
	.page {
		align-items: center;
		display: flex;
		flex-direction: column;
		height: calc(100vh - var(--spacing14));
		justify-content: flex-start;
		overflow: auto;
		width: 100%;
	}
</style>
