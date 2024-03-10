<script>
	import { ActionBar, BackButton, LoremIpsum, NextButton, Page } from '$lib/index.js'

	const leftContent = [BackButton]

	const rightContent = [NextButton]
</script>

<Page>
	<h1>Action Bars</h1>
	<LoremIpsum />
</Page>
<ActionBar
	{leftContent}
	{rightContent}
/>
