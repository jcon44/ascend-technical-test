<script>
	export let date, id='', required=false, width=''
</script>

<input
	bind:value={date}
	class='date-input'
	style={`width:${width}`}
	type="date"
	{id}
	{required}
/>