<script>
	import { Button } from '$lib/index.js';
	import { onMount } from 'svelte';

	export let arrow = true,
		callback = null,
		classes = ['btn-fit', 'btn-l', 'btn-square', 'btn-primary'],
		loading = false,
		text = '',
		url = '';
</script>

<Button {callback} {classes} text='Continue' {url} />
