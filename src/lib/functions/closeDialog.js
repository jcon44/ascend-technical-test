export default function closeDialog(store) {
	store.dialog.content = null
	store.dialog.showDialog = false
	return store
}