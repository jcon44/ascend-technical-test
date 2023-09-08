<div class='action-bar'>
	<div class='left-actions'>
		<slot name='leftSide' />
	</div>
	<div class='right-actions'>
		<slot name='rightSide' />
	</div>
</div>


<style>
	.action-bar {
		background-color: white;
		border-radius: var(--border-radius-m) 0 0 0;
		border: var(--spacing00) solid var(--neutral-100);
		bottom: 0;
		box-shadow: var(--neutral-shadow-s);
		display: flex;
		height: var(--spacing15);
		justify-content: space-between;
		margin-top: auto;
		padding: var(--spacing09);
		position: sticky;
		width: 100%;
	}
</style>