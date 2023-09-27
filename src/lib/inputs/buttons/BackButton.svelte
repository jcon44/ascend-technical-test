<script>
	import { ArrowLeftSmallIcon, Button, browserBack } from '$lib/index.js'

	export let arrow = true,
		callback = browserBack,
		classes = ['btn-fit', 'btn-m', 'btn-outline', 'btn-square'],
		text = ''
</script>

<Button {callback} {classes} firstIcon={arrow ? ArrowLeftSmallIcon : null} {text} />
