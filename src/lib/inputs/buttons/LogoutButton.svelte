<script>
	import { Button } from '$lib/index.js';

	export let callback
</script>

<Button classes={['btn-fit', 'btn-l', 'btn-neutral', 'btn-rect']} text="Logout" {callback} />
