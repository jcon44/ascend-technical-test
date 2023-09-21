import { closeDialog } from '$lib/index.js'

export default function openDialog(store, dialog) {
	store = closeDialog(store)
	store.dialog.content = dialog
	store.dialog.showDialog = true
	return store
}