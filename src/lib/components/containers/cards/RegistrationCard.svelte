<div class="registration-card">
	<div class="headline-l-xxl">Registration</div>
	<slot />
</div>

<style>
	.registration-card {
		align-items: flex-start;
		background-color: var(--white-trans-900);
		border-radius: var(--spacing11);
		border: var(--spacing00) solid var(--neutral-trans-100);
		box-shadow: var(--neutral-shadow-s);
		display: flex;
		flex-direction: column;
		gap: var(--spacing11);
		height: fit-content;
		padding: var(--spacing13);
		width: var(--spacing27);
	}
</style>
