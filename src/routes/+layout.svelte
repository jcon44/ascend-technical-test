<script>
	import './styles.css'
	import { AscendLogoIcon, HomeIcon, MetricsIcon, CommunityIcon, ProfileIcon, Users03SmallIcon, AdministratorsIcon } from '$lib/index.js'
	import { HeaderBar, Main, NavBar, ProfileButton, Shell, ToastArea } from '$lib/index.js'
	import TextComponent from './TextComponent.svelte'

	const NavIcon = AscendLogoIcon

	const navBarContents = {
		primaryPageList: [
			{
				icon: HomeIcon,
				text: 'Home',
				url: '/'
			},
			{
				icon: MetricsIcon,
				text: 'Metrics',
				url: '/',
				sublinks: [
					{
						text: 'Home',
						url: '/home'
					}
				]
			},
			{
				icon: CommunityIcon,
				text: 'Staff',
				url: '/staff',
			},
			{
				icon: ProfileIcon,
				text: 'Caregivers',
				url: '/caregivers',
			},
			{
				icon: Users03SmallIcon,
				text: 'Children',
				url: '/',
			},
			{
				icon: AdministratorsIcon,
				text: 'Administrators',
				url: '/',
			},
			{
				icoon: HomeIcon,
				text: 'Icons (dev)',
				url: '/icons'
			}
		],
	}
</script>

<Shell>
	<NavBar
		keepOpen={true}
		openHeaderComponent={NavIcon}
		closedHeaderComponent={NavIcon}
		textHeaderComponent={TextComponent}
		{navBarContents}
	/>
	<Main>
		<HeaderBar>
			<ProfileButton url="/" />
		</HeaderBar>
		<slot />
	</Main>
	<ToastArea />
</Shell>
