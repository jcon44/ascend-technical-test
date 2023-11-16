<script>
	import { LogoutMenuButton, Menu, ProfileIcon } from '$lib/index.js'

	export let user, logoutCallback, menuOpen, menuList = [
		{
			name: 'Profile',
			url: '/profile'
		},
		{
			name: 'Terms & Conditions',
			url: '/terms-and-conditions'
		},
		{
			name: 'Privacy Policy',
			url: '/privacy-policy'
		}
	]
</script>

<Menu
	bind:menuOpen={menuOpen}
	{menuList}
>
	<div class='menu-header' slot='menu-header'>
		<ProfileIcon />
		<div class='user-info'>
			{user.name}
			{user.role}
		</div>
	</div>
	<div class='menu-footer' slot='menu-footer'>
		<LogoutMenuButton callback={logoutCallback} />
	</div>
</Menu>

<style>
	.menu-header {
		display: flex;
		gap: var(--spacing05);
	}
	.user-info {
		display: flex;
		flex-direction: column;
	}
</style>