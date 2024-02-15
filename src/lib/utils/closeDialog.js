export default function closeDialog(store) {
	store.dialog.content = null
	store.dialog.data = null
	store.dialog.open = false
	store.dialog.title = ''
	return store
}
