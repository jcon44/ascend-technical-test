<script>
	import { TimeInput, Label } from '$lib/index.js'

	export let id='', label='', time='', required=false, width=''
</script>

<div class='time-picker'>
	<Label {id} {label} />
	<TimeInput bind:time {id} {required} {width} />
</div>

<style>
	.time-picker {
		display: flex;
		gap: var(--spacing03);
		flex-direction: column;
	}
</style>