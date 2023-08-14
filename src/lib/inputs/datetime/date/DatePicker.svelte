<script>
	import { DateInput } from '$lib/index.js';

	export let date,
		label,
		name
</script>

<div class='date-picker'>
	<label class="semibold" for={name}>
		{label}
	</label>
	<DateInput bind:date {name} />
</div>

<style>
	.date-picker {
		width: 100%;
	}
</style>