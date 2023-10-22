<script>
	import { Tag } from '$lib/index.js'

	export let status = '',
		time = ''

	const statusKey = status ? status.replace(' ', '').toLowerCase() : ''

	const statusColorMap = {
		draft: 'neutral',
		failed: 'error',
		inprogress: 'warning',
		scheduled: 'neutral',
		sent: 'success',
		subscribed: 'success',
	}

	const statusType = statusColorMap[statusKey]

	function getStatus() {
		if ((status === 'Sent' || status === 'In Progress') && time) return `${status} ${time}`
		else if (status === 'Scheduled' && time) return `${status} for ${time}`
		else return status
	}
</script>

<Tag
	type={`${statusType}-subtle`}
	content={getStatus()}
/>
