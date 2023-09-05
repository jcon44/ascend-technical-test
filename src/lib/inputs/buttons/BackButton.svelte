<script>
	import { ArrowLeftSmallIcon, Button, browserBack } from '$lib/index.js'

	export let arrow = true,
		// callback = browserBack,
		classes = ['btn-fit', 'btn-m', 'btn-outline', 'btn-square'],
		text = '',
		url = ''
	
	const callback = () => console.log('back up!')
</script>

<Button
	{callback}
	{classes}
	firstIcon={arrow ? ArrowLeftSmallIcon : null}
	{text}
	{url}
/>
