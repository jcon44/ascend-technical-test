<script>
	export let id='', required=false, time, width=''
</script>

<input
	type="time"
	class='time-input'
	bind:value={time}
	style={`width:${width}`}
	{id}
	{required}
/>