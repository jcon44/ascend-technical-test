<script>
	export let heading
</script>

<div class="dialog-section">
	<div class="dialog-section-heading headline-l-s">
		{heading}
	</div>
	<div class="dialog-section-content">
		<slot />
	</div>
</div>

<style>
	.dialog-section {
		width: 100%;
	}
	.dialog-section-heading {
		color: var(--neutral-base);
		margin: var(--spacing06) 0;
	}
	.dialog-section-content {
		margin-bottom: var(--spacing09);
	}
</style>
