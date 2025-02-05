<script>
	import { Page, PageBody, DashboardPageTitle, NextButton, MetricCard, TabBar, Table, StatusTag } from '$lib/index.js'
	import { FilterLinesSmallIcon, SearchSmallIcon, ArrowDownExtraSmallIcon } from '$lib/index.js'
	import AddStaffButton from './AddStaffButton.svelte'
	import ExportMileageButton from './ExportMileageButton.svelte'
	import ExportDataButton from './ExportDataButton.svelte'

	const tabList = [
		{ name: 'My Staff' },
		{ name: 'All Staff' }
	]

	const tableColumns = [
		{
			title: 'Staff Member',
			key: 'staffMember',
			type: 'text',
			styles: ['flex: 2', 'max-width: 223px', 'font-weight: bold']
		},
		{
			title: 'Title',
			key: 'title',
			type: 'text',
			styles: ['flex: 2', 'max-width: 223px']
		},
		{
			title: 'Program',
			key: 'program',
			type: 'text',
			styles: ['flex: 2', 'max-width: 223px']
		},
		{
			title: 'Supervisor',
			key: 'supervisor',
			type: 'text',
			styles: ['flex: 2', 'max-width: 223px']
		},
		{
			title: 'Status',
			component: StatusTag,
			key: 'status',
			type: 'tag',
			styles: ['flex: 2', 'max-width: 223px']
		}
	]

	let list = [
		{
			staffMember: 'John Doe',
			title: 'Supervisor',
			program: 'Nurse Family Partnership',
			supervisor: 'N/A',
			status: 'Active'
		},
		{
			staffMember: 'John Doe',
			title: 'Home Visitor',
			program: 'Parents as Teachers',
			supervisor: 'Dana Boggs',
			status: 'Active'
		},
		{
			staffMember: 'John Doe',
			title: 'Supervisor',
			program: 'Nurse Family Partnership',
			supervisor: 'Moriah Brown',
			status: 'Active'
		},
		{
			staffMember: 'John Doe',
			title: 'Service Coordinator',
			program: 'Parents as Teachers',
			supervisor: 'Dana Boggs',
			status: 'Active'
		},
		{
			staffMember: 'John Doe',
			title: 'Home Visitor',
			program: 'Nurse Family Partnership',
			supervisor: 'Moriah Brown',
			status: 'Active'
		},
		{
			staffMember: 'John Doe',
			title: 'Service Coordinator',
			program: 'Nurse Family Partnership',
			supervisor: 'Moriah Brown',
			status: 'Active'
		},
		{
			staffMember: 'John Doe',
			title: 'Supervisor',
			program: 'Healthy Families America',
			supervisor: 'Stephanie Herndon',
			status: 'Active'
		},
		{
			staffMember: 'John Doe',
			title: 'Data Coordinator',
			program: 'Healthy Families America',
			supervisor: 'Stephanie Herndon',
			status: 'Archived'
		},
		{
			staffMember: 'John Doe',
			title: 'Supervisor',
			program: 'Nurse Family Partnership',
			supervisor: 'Moriah Brown',
			status: 'Archived'
		},
		{
			staffMember: 'John Doe',
			title: 'Home Visitor',
			program: 'Parents as Teachers',
			supervisor: 'Dana Boggs',
			status: 'Archived'
		},
	]
</script>

<Page>
	<PageBody size="full">
		<DashboardPageTitle
			title="Staff"
			titleButton={AddStaffButton}
		/>
		<div class="content">
			<div class="cards">
				<MetricCard
					styles={['align-items:center']}
					title="My Staff"
					value="10"
				/>
				<MetricCard
					styles={['align-items:center']}
					title="Active Staff"
					value="100"
				/>
				<MetricCard
					styles={['align-items:center']}
					title="Archived Staff"
					value="10"
				/>
			</div>

			<div class='heading-bar'>
				<div class='left-side'>
					<div class='card filter'>
						<FilterLinesSmallIcon />
						<span>Filter & Sort</span>
					</div>
					<div class='card search'>
						<SearchSmallIcon />
						<input
							placeholder="Search"
						/>
					</div>
				</div>
				<div class='right-side'>
					<div class='card'>
						<ExportMileageButton />
					</div>
					<div class='card'>
						<ExportDataButton />
					</div>
				</div>
			</div>

			<div class='tabs'>
				<TabBar {tabList} />
			</div>
			
			<div>
				<Table
					columns={tableColumns}
					bind:list
					paging="true"
					pageSize={5}
					page={1}
				/>
			</div>
		</div>
	</PageBody>
</Page>

<style>
	.content {
		display: flex;
		flex-flow: column nowrap;
		width: 100%;
	}

	.cards {
		display: flex;
		margin: auto;
		gap: var(--spacing10);
		width: 100%;
		justify-content: space-between;
	}

	.heading-bar {
		font-weight: 600;
		display: flex;
		margin-top: 1em;
		justify-content: space-between;
	}

	.card {
		display: flex;
		padding: 0.5em 1em;
		border: 1px solid var(--neutral-200);
		border-radius: 1em;
	}

	.card:first-child {
		margin-right: 1em;
	}

	.filter > span {
		margin-left: 0.7em;
	}

	.card > input {
		border: 0;
		padding-left: 1em;
	}

	.left-side, .right-side {
		display: flex;
	}

	.right-side {
		justify-content: end;
	}

	.tabs {
		margin-top: 3em;
	}
</style>
