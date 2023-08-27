<script>
	import { LinkButton, StandardButton } from '$lib/index.js';

	export let callback = undefined,
		classes = ['btn-fit', 'btn-m', 'btn-primary', 'btn-rect'],
		disabled = 'false',
		firstIcon = undefined,
		secondIcon = undefined,
		styles = '',
		text = '',
		url = '';
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div on:click={callback || ''} on:keypress={callback || ''} class="btn-fit button-wrapper">
	{#if url?.length}
		<LinkButton {classes} {disabled} {firstIcon} {secondIcon} {styles} {text} {url} />
	{:else}
		<StandardButton {classes} {disabled} {firstIcon} {secondIcon} {styles} {text} />
	{/if}
</div>
