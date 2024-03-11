<script>
	import { ContactUsButton, PrivacyPolicyButton, TermsAndConditionsButton } from '$lib/index.js'

	export let contactUsURL, privacyPolicyURL, termsAndConditionsURL
</script>

<div class="footer-bar">
	<div class="company-signature">
		Powered by <strong>Ascend Innovations</strong>
	</div>
	<div class="link-buttons">
		{#if termsAndConditionsURL}
			<TermsAndConditionsButton url={termsAndConditionsURL} />
		{/if}
		{#if privacyPolicyURL}
			<PrivacyPolicyButton url={privacyPolicyURL} />
		{/if}
		{#if contactUsURL}
			<ContactUsButton url={contactUsURL} />
		{/if}
	</div>
</div>

<style>
	.footer-bar {
		align-items: center;
		background-color: var(--background-base);
		display: flex;
		justify-content: space-between;
		padding: 0 var(--spacing09);
		height: var(--spacing13);
	}
	.link-buttons {
		display: flex;
		gap: var(--spacing06);
	}
</style>
