<script>
	import { closeDialog, CancelButton, CloseDialogButton, ConfirmButton, Dialog } from '$lib/index.js'

	export let store, callback

	let loading = false

	async function confirmLogout() {
		loading = true
		store = await callback(store) // logout callback function
		loading = false
		store = closeDialog(store)
	}

	function cancel() {
		store = closeDialog(store)
	}
</script>

<Dialog bind:store={store}>
	<div
		class="dialog-header-slot-contents"
		slot="header"
	>
		<div class="headline-l-xl">Log Out</div>
		<form method="dialog">
			<CloseDialogButton callback={cancel} />
		</form>
	</div>
	<div
		class="dialog-body-slot-contents"
		slot="body"
	>
		<p>Are you sure you want to exit?</p>
	</div>
	<div
		class="dialog-footer-slot-contents"
		slot="footer"
	>
		<CancelButton callback={cancel} />
		<ConfirmButton
			{loading}
			callback={confirmLogout}
			url="/login"
		/>
	</div>
</Dialog>
