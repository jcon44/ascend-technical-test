<script>
	import { DateInput, Label } from '$lib/index.js'

	export let date, id='', label='', width=''
</script>

<div class='date-picker'>
	<Label {id} {label} />
	<DateInput bind:date {id} {width} />
</div>

<style>
	.date-picker {
		display: flex;
		gap: var(--spacing03);
		flex-direction: column;
	}
</style>