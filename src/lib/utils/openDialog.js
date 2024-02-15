export default function openDialog(store, dialog) {
	store.dialog.content = dialog
	store.dialog.open = true
	return store
}
