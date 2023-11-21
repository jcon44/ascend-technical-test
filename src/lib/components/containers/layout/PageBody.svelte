<script>
	export let size = 'thin'
</script>

<div class={`page-body ${size}`}>
	<slot />
</div>

<style>
	.page-body {
		display: flex;
		flex-direction: column;
		gap: var(--spacing09);
		margin: 0 auto;
		padding-bottom: var(--spacing15);
	}
	.full {
		align-items: start;
		padding: 0 var(--spacing14);
		width: 100%;
	}
	.thin {
		width: var(--spacing27);
	}
	.wide {
		width: var(--spacing33);
	}
</style>
