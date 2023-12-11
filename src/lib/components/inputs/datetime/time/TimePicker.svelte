<script>
	import { TimeInput, Label } from '$lib/index.js'

	export let id = '',
		label = '',
		required = false,
		styles = [],
		time = ''
</script>

<div
	class="time-picker"
	style={styles.join(';')}
>
	<Label
		{id}
		{label}
	/>
	<TimeInput
		bind:time
		{id}
		{required}
	/>
</div>

<style>
	.time-picker {
		display: flex;
		gap: var(--spacing03);
		flex-direction: column;
		width: 100%;
	}
</style>
