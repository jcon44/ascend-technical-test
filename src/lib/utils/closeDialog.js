export default function closeDialog(store) {
	store.dialog = {
		content: null,
		data: null,
		open: false,
		title: ','
	}
	return store
}
