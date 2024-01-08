<script>
	import { InputError, LoginButton } from '$lib/index.js'

	export let callback,
		username = ''

	let password = '',
		validUsername,
		validPassword

	function validateUsername() {
		validUsername = username.length > 0
		return validUsername
	}

	function validatePassword() {
		if (validUsername) validPassword = password.length > 0
		else validPassword = true
		return validPassword
	}

	function validateLogin(event) {
		validUsername = username.length > 0
		validPassword = password.length > 0
		const valid = validUsername && validPassword
		if (valid && callback) {
			return callback(event)
		} else {
			return false
		}
	}
</script>

<div class="login">
	<div class="headline-l-xxl">Login</div>
	<form name="login" method="POST" on:submit|preventDefault={(event) => validateLogin(event)}>
		<div class="login-element">
			<label
				for="username"
				class="body-m-semibold">Username</label
			>
			<input
				type="text"
				id="username"
				class={validUsername === false ? 'error' : ''}
				placeholder="Enter your username"
				bind:value={username}
				on:blur={validateUsername}
			/>
			{#if validUsername === false}
				<InputError text="Please enter your username" />
			{/if}
		</div>
		<div class="login-element">
			<label
				for="password"
				class="body-m-semibold">Password</label
			>
			<input
				type="password"
				id="password"
				class={validPassword === false ? 'error' : ''}
				placeholder="Enter your password"
				bind:value={password}
				on:blur={validatePassword}
			/>
			{#if validPassword === false}
				<InputError text="Please enter your password" />
			{/if}
		</div>
		<div class="login-button-row">
			<LoginButton />
		</div>
	</form>
	<slot />
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
	.login-element {
		align-items: flex-start;
		display: flex;
		flex-direction: column;
		gap: var(--spacing05);
		width: 100%;
	}
	.login-button-row {
		width: 100%;
	}
	form {
		align-items: center;
		display: flex;
		flex-direction: column;
		gap: var(--spacing10);
		width: 100%;
	}
	input {
		border-radius: var(--spacing04);
		border: var(--spacing01) solid var(--neutral-100);
		padding: var(--spacing05) var(--spacing09);
		width: 100%;
	}
	input:invalid {
		border: var(--spacing01) solid var(--error-base);
	}
	.error {
		border-color: var(--error-500);
	}
</style>
