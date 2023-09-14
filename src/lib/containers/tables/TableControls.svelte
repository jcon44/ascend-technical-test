<script>
	import SubscribersFilterAndSortDialog from '$containers/dialogs/filters/SubscribersFilterAndSortDialog.svelte'
	import SubscribersSearchBar from '$inputs/text/SubscribersSearchBar.svelte'
	import store from '$store'
	import { FilterAndSortButton } from 'ascend-ui'

	function openFilterAndSortDialog() {
		$store.dialog.content = SubscribersFilterAndSortDialog
		$store.dialog.showDialog = !$store.dialog.showDialog
	}
</script>

<div class='subscriber-table-controls'>
	<FilterAndSortButton callback={openFilterAndSortDialog} />
	<SearchBar />
</div>

<style>
	.subscriber-table-controls {
		display: flex;
		gap: var(--spacing06);
	}
</style>