export default function clearDialog(store) {
	store.dialog = {
		content: null,
		data: null,
		showDialog: false,
		title: ''
	}
	return store
}