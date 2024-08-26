<script>
	import './styles.css'
	import { AscendLogoIcon, HeaderBar, Main, NavBar, ProfileButton, Shell, ToastArea } from '$lib/index.js'

	const NavIcon = AscendLogoIcon

	const navBarContents = {
		topPageList: [
			{
				icon: NavIcon,
				text: 'Action Bars',
				url: '/actionbars',
			},
			{
				icon: NavIcon,
				text: 'Alerts',
				url: '/alerts',
			},
			{
				icon: NavIcon,
				text: 'Animations',
				url: '/animations',
			},
			{
				icon: NavIcon,
				text: 'Buttons',
				url: '/buttons',
			},
			{
				icon: NavIcon,
				text: 'Cards',
				url: '/cards',
			},
			{
				icon: NavIcon,
				text: 'Colors',
				url: '/colors',
			},
			{
				icon: NavIcon,
				text: 'Date',
				url: '/date',
			},
			{
				icon: NavIcon,
				text: 'Dialog',
				url: '/dialog',
			},
			{
				icon: NavIcon,
				text: 'Form',
				url: '/form',
			},
			{
				icon: NavIcon,
				text: 'Headers',
				url: '/headers',
			},
			{
				icon: NavIcon,
				text: 'Icons',
				url: '/icons',
			},
			{
				icon: NavIcon,
				text: 'Layout',
				url: '/layout',
			},
			{
				icon: NavIcon,
				text: 'Links',
				url: '/links',
			},
			{
				icon: NavIcon,
				text: 'Login',
				url: '/login',
			},
			{
				icon: NavIcon,
				text: 'Logos',
				url: '/logos',
			},
			{
				icon: NavIcon,
				text: 'Dialog',
				url: '/Dialog',
			},
			{
				icon: NavIcon,
				text: 'Pagination',
				url: '/pagination',
			},
			{
				icon: NavIcon,
				text: 'Progress',
				url: '/progress',
			},
			{
				icon: NavIcon,
				text: 'Radio',
				url: '/radio',
			},
			{
				icon: NavIcon,
				text: 'Spacing',
				url: '/spacing',
			},
			{
				icon: NavIcon,
				text: 'Tabs',
				url: '/tabs',
			},
			{
				icon: NavIcon,
				text: 'Tags',
				url: '/tags',
			},
			{
				icon: NavIcon,
				text: 'Toasts',
				url: '/toasts',
			},
			{
				icon: NavIcon,
				text: 'Tooltips',
				url: '/tooltips',
			},
			{
				icon: NavIcon,
				text: 'Typography',
				url: '/typography',
			},
		],
		bottomPageList: [
			{
				icon: NavIcon,
				text: 'Typography',
				url: '/typography',
			},
		],
	}
</script>

<Shell>
	<!-- <NavBar
		keepOpen={true}
		{navBarContents}
	/> -->
	<Main>
		<HeaderBar>
			<ProfileButton url="/" />
		</HeaderBar>
		<slot />
	</Main>
	<ToastArea />
</Shell>
