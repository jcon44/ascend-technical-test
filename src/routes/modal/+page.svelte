<script>
	import {
		Button,
		Dialog,
		Content,
		SampleDialogContent,
	} from '$lib/index.js';

	let button,
		showDialog = false,
		title = 'Sample Dialog'
</script>

<Content>
	<Button bind:this={button} callback={() => (showDialog = true)} text="Show Dialog" />
	<Dialog {title} {showDialog} on:close={() => (showDialog = false)}>
		<SampleDialogContent />
	</Dialog>
</Content>
