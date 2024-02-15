export default function closeDialog(store) {
	store.dialog.content = null
	store.dialog.open = false
	return store
}
