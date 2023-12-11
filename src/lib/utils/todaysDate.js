export default function todaysDate() {
	const now = new Date()

	const year = now.getFullYear()

	let month = now.getMonth() + 1
	if (month.toString().length < 2) month = '0' + month

	let day = now.getDate()
	if (day.length < 2) day = '0' + day

	const date = [year, month, day].join('-')

	return date
}
