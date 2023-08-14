<script>
	import {
		ActionBar,
		BackButton,
		LoremIpsum,
		NextButton,
		Content
	} from '$lib/index.js';

	const leftContent = [BackButton];

	const rightContent = [NextButton];
</script>

<Content>
	<h1>Action Bars</h1>
	<LoremIpsum />
</Content>
<ActionBar {leftContent} {rightContent} />
