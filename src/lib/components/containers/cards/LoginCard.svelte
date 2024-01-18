<script>
	export let dialogCallback
</script>

<div class="login">
	<div class="headline-l-xxl">Login</div>
	<slot />
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
</div>

<style>
	.login {
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
	.account-change-slot {
		width: 100%;
	}
	.account-profile-link {
		border-bottom: var(--neutral-stroke-100-m);
		cursor: pointer;
		margin: auto;
		width: fit-content;
	}
</style>
