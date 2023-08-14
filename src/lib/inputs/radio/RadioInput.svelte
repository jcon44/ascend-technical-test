<script>
	export let item
</script>

<input
	type="radio"
	name={item.name}
	value={item.value}
/>

<style>
	input {
		-webkit-appearance: none;
		appearance: none;
		background: white;
		border-radius: 50%;
		border: var(--spacing01) solid white;
		box-shadow: 0 0 0 var(--spacing01) var(--primary-base);
		height: 14px;
		width: 14px;
	}
	input:checked {
		background: var(--primary-base);
	}
</style>
