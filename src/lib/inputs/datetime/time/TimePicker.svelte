<script>
	import { TimeInput, InputLabel } from '$lib/index.js'

	export let id='', label='', time, width=''
</script>

<div class='time-picker'>
	<InputLabel {id} {label} />
	<TimeInput bind:time {id} {width} />
</div>

<style>
	.time-picker {
		display: flex;
		gap: var(--spacing03);
		flex-direction: column;
	}
</style>