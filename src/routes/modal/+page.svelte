<script>
	import { Button, Dialog, Page } from '$lib/index.js'

	let button,
		showDialog = false,
		title = 'Sample Dialog'
</script>

<Page>
	<Button bind:this={button} callback={() => (showDialog = true)} text="Show Dialog" />
	
</Page>
