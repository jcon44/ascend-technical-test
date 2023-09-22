<script>
	import { Button, Dialog, Page } from '$lib/index.js'

	let button,
		open = false,
		title = 'Sample Dialog'
</script>

<Page>
	<Button bind:this={button} callback={() => (open = true)} text="Show Dialog" />
</Page>
