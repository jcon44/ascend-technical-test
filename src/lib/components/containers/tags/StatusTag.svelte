<script>
	import { Tag } from '$lib/index.js'

	export let status = '',
		time = ''

	$: statusKey = status ? status.replace(' ', '').toLowerCase() : ''

	const statusColorMap = {
		approved: 'success',
		draft: 'neutral',
		failed: 'error',
		inprogress: 'warning',
		pending: 'neutral',
		scheduled: 'neutral',
		sent: 'success',
		subscribed: 'success',
	}

	$: statusType = statusColorMap[statusKey]

	function getStatus(status, time) {
		if ((status === 'Sent' || status === 'In Progress') && time) return `${status} ${time}`
		else if (status === 'Scheduled' && time) return `${status} for ${time}`
		else return status
	}

	$: displayStatus = getStatus(status, time)
</script>

<Tag
	type={`${statusType}-subtle`}
	bind:content={displayStatus}
/>
