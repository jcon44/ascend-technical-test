<script>
	import { Button, ChevronDoubleLeftSmallIcon, ChevronDoubleRightSmallIcon } from '$lib/index.js';

	export let callback, keepOpen;
</script>

<Button
	{callback}
	classes={['btn-fit', 'btn-m', 'btn-square', 'btn-white']}
	firstIcon={keepOpen ? ChevronDoubleLeftSmallIcon : ChevronDoubleRightSmallIcon}
/>
