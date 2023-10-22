export default function removeToast(event, toastList) {
	return toastList.filter((t) => t._id !== event.detail.id)
}
