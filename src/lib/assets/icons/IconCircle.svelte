<script>
	export let color
</script>

<div class='icon-circle' style={`background-color: ${color};`}>
	<slot />
</div>

<style>
	.icon-circle {
		align-items: center;
		border-radius: 50%;
		display: flex;
		justify-content: center;
		padding: var(--spacing05);
	}
</style>