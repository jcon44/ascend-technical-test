<script>
	export let phoneNumber = '', style = 'width:100%'
</script>

<div class="phone-number-input">
	<input
		type="tel"
		bind:value={phoneNumber}
		style={style}
		placeholder="1234567890"
		minlength="11"
		maxlength="11"
		required
	/>
	{#if phoneNumber?.length}
		<div class="phone-number-validation">
			
		</div>
	{/if}
</div>

<style>
	.phone-number-input {
		display: flex;
		gap: var(--spacing07);
	}
	input {
		border: var(--spacing01) solid var(--neutral-100);
		border-radius: var(--spacing05);
		padding: var(--spacing05) var(--spacing09);
	}
	.phone-number-validation {
		display: flex;
		gap: 14px;
	}
</style>
