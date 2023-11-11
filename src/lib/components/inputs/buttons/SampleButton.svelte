<script>
	export let name
</script>

<div class="sample-button">
	<div class="button-name">
		{name}
	</div>
	<slot />
</div>

<style>
	.sample-button {
		margin: 50px 0;
	}
	.button-name {
		font-weight: bold;
		font-size: 24px;
		margin-bottom: 12px;
	}
</style>
