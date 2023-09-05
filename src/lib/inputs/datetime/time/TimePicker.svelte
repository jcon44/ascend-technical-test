<script>
	import { TimeInput, InputLabel } from '$lib/index.js'

	export let id='', label='', time, width='100%'
</script>

<div class='time-picker'>
	<InputLabel {id} {label} />
	<TimeInput bind:time {id} {label} {width} />
</div>

<style>
	.time-picker {
		width: 100%;
	}
</style>