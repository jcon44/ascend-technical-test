export default function closeDialog(store) {

	store.dialog = {
		content: null,
		data: null,
		showDialog: false,
		title: ''
	}

	return store

}