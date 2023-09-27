<script>
	import { Button, ProfileSmallIcon } from '$lib/index.js'

	export let callback = undefined
</script>

<Button {callback} classes={['btn-circle', 'btn-m', 'btn-outline']} firstIcon={ProfileSmallIcon} />
