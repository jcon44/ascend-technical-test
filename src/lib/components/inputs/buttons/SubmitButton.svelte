<script>
	import { Button, ProgressSpinner } from '$lib/index.js'
	import { onMount } from 'svelte'

	export let
		callback = null,
		classes = ['btn-fit', 'btn-l', 'btn-primary', 'btn-square'],
		disabled = false,
		icon = null,
		loading = false,
		loadingIcon = ProgressSpinner,
		text = 'Submit',
		url = ''

	onMount(() => {
		if (loading) icon = loadingIcon
		else icon = null
	})
</script>

<Button
	rightIcon={icon}
	{callback}
	{classes}
	{disabled}
	{text}
	{url}
/>
