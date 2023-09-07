<script>
	import { ArrowRightSmallIcon, Button, ProgressSpinner } from '$lib/index.js'
	import { onMount } from 'svelte'

	export let arrow = true,
		callback = null,
		classes = ['btn-fit', 'btn-l', 'btn-primary', 'btn-square'],
		loading = false,
		text = '',
		url = ''

	let icon

	onMount(() => {
		if (loading) icon = ProgressSpinner
		else if (arrow) icon = ArrowRightSmallIcon
	})
</script>

<Button {callback} {classes} secondIcon={icon} {text} {url} />
