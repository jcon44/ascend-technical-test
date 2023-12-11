<script>
	import { AscendLoginBackgroundImage, LoginCard } from '$lib/index.js'

	export let loginCallback,
		username,
		dialogCallback = null
</script>

<div
	class="login-page"
	style={`background-image: url(${AscendLoginBackgroundImage})`}
>
	<LoginCard
		bind:username
		callback={loginCallback}
	>
		{#if dialogCallback}
			<div class="account-change-slot">
				<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
				<p
					on:click={dialogCallback}
					on:keypress={dialogCallback}
					class="account-profile-link"
				>
					Create Account or Change Profile Info
				</p>
			</div>
		{/if}
	</LoginCard>
</div>

<style>
	.login-page {
		align-items: center;
		background-position: center;
		background-size: cover;
		bottom: 0;
		display: flex;
		justify-content: center;
		left: 0;
		position: fixed;
		right: 0;
		top: 0;
	}
	.account-change-slot {
		width: 100%;
	}
	.account-profile-link {
		border-bottom: var(--neutral-stroke-100-m);
		cursor: pointer;
		margin: auto;
		width: fit-content;
	}
	@media screen and (min-width: 768px) {
		.login-page {
			padding: unset;
		}
	}
</style>
