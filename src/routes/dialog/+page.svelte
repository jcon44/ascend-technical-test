<script>
	import { Button, Dialog, Page } from '$lib/index.js'

</script>

<Page>
	<h1>Dialog</h1>
	<Button callback={toggleDialog} text="Show Dialog" />
	
</Page>

<style>
	.test-1,
	.test-2 {
		border: 1px solid red;
		width: fit-content;
	}
</style>
