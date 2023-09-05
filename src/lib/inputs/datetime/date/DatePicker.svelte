<script>
	import { DateInput, InputLabel } from '$lib/index.js'

	export let date, id='', label='', width=''
</script>

<div class='date-picker'>
	<InputLabel {id} {label} />
	<DateInput bind:date {id} {label} {width} />
</div>