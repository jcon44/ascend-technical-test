import { closeDialog } from '$lib/index.js'

export default function openDialog(store, dialog) {
	const preservedDialogData = store.dialog.data
	store = closeDialog(store)
	store.dialog.content = dialog
	store.dialog.data = preservedDialogData
	store.dialog.open = true
	return store
}
