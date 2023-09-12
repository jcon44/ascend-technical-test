<script>
	import { Button, Dialog, Page } from '$lib/index.js'

	let showDialog = false

	function toggleDialog() {
		showDialog = !showDialog
	}
</script>

<Page>
	<h1>Dialog</h1>
	<Button callback={toggleDialog} text="Show Dialog" />
	<Dialog title="Test Dialog" bind:showDialog>
		<div slot="dialog-body">Lorem ipsum so on and so forth</div>
		<div slot="dialog-footer">
			<div class="test-1">testing footer 1</div>
			<div class="test-2">testing footer 2</div>
		</div>
	</Dialog>
</Page>

<style>
	.test-1,
	.test-2 {
		border: 1px solid red;
		width: fit-content;
	}
</style>
