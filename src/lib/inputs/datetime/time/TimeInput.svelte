<script>
	export let id = '',
		required = false,
		time,
		width = ''
</script>

<input
	bind:value={time}
	class="time-input"
	style={`width:${width}`}
	type="time"
	{id}
	{required}
/>
