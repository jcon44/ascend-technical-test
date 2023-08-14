<script>
	export let listView

	function toggle() {
		listView = !listView
	}
</script>


<div class='view-mode'>
	<button
		on:click={toggle}
		class={`view-mode-btn ${listView ? 'list-view-selected' : ''}`}
	>
		L
	</button>
	<button
		on:click={toggle}
		class={`view-mode-btn ${listView ? '' : 'grid-view-selected'}`}
	>
		G
	</button>
</div>


<style>
	.view-mode {
		background: var(--neutral-100);
		border-radius: 14px;
		display: flex;
		height: 48px;
		justify-content: center;
		padding: var(--spacing01);
		width: var(--spacing15);
	}
	.view-mode-btn {
		align-items: center;
		border-radius: var(--btn-border-radius);
		border: none;
		display: flex;
		height: 100%;
		justify-content: center;
		text-align: center;
		width: 100%;
	}
	.list-view-selected {
		background-color: white;
	}
	.grid-view-selected {
		background-color: white;
	}
</style>