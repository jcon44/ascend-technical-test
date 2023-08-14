<script>
	import { TimeInput } from '$lib/index.js';

	export let time,
		label,
		name
</script>

<div class='time-picker'>
	<label class="semibold" for={name}>
		{label}
	</label>
	<TimeInput bind:time {name} />
</div>

<style>
	.time-picker {
		width: 100%;
	}
</style>