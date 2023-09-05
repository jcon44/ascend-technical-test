<script>
	export let date, id='', required=false, width=''
</script>

<input
	type="date"
	class='date-input'
	bind:value={date}
	style={`width:${width}`}
	{id}
	{required}
/>