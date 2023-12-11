<script>
	export let styles = []
</script>

<div
	class="main-content"
	style={styles.join(';')}
>
	<slot />
</div>

<style>
	.main-content {
		align-items: center;
		display: flex;
		flex-direction: column;
		min-height: calc(100dvh - 81px);
		overflow: hidden;
		width: 100%;
	}
</style>
