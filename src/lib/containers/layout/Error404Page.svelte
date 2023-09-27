<script>
	import { ContactUsButton, Error404Graphic } from '$lib/index.js'

	export let redirectButton

	const emailAddress = 'contact@ascend-innovations.com'
</script>

<svelte:head>
	<title>404 Error</title>
</svelte:head>
<div class="error-404-page">
	<div class="error-404-banner-wrapper">
		<Error404Graphic />
	</div>
	<div class="error-404-content">
		<h1 class="primary-headline-l-xxl">Page Not Found</h1>
		<div class="error-404-text-row">
			<p>
				The page you are trying to visit doesn't exist or was removed. If you are unable to find
				what you're looking for, please contact us at <a href="mailto:{emailAddress}"
					>{emailAddress}</a
				>
			</p>
		</div>
		<div class="error-404-button-row">
			<svelte:component this={redirectButton} />
			<ContactUsButton {emailAddress} classes={['btn-full', 'btn-m', 'btn-outline', 'btn-rect']} />
		</div>
	</div>
</div>

<style>
	.error-404-page {
		align-items: center;
		display: flex;
		flex-direction: column;
	}
	.error-404-banner-wrapper {
		width: var(--spacing32);
	}
	.error-404-content {
		align-items: center;
		display: flex;
		flex-direction: column;
		gap: var(--spacing10);
		justify-content: space-between;
		text-align: center;
		width: var(--spacing27);
	}
	.error-404-button-row {
		align-items: space-between;
		display: flex;
		flex-direction: column;
		gap: var(--spacing09);
		width: 100%;
	}
	a {
		color: var(--neutral-800);
		font-weight: bold;
	}
</style>
