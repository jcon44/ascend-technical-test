<script>
	import {
		Button,
		Dialog,
		Content,
		SampleModalDialogContent,
	} from '$lib/index.js';

	let button,
		showModal = false,
		title = 'Sample Modal'
</script>

<Content>
	<Button bind:this={button} callback={() => (showModal = true)} text="Show Modal" />
	<Dialog {title} {showModal} on:close={() => (showModal = false)}>
		<SampleModalDialogContent />
	</Dialog>
</Content>
