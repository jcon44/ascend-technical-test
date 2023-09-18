<script>
	import { TextMessageBubble } from '$lib/index.js'

	export let text='', height='', width='', padding=''
</script>

<TextMessageBubble {height} {width} {padding}>
	{text}
</TextMessageBubble>