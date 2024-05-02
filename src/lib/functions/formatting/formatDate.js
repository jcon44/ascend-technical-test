export default function formatDate(timestamp) {
	timestamp = new Date(timestamp)

	let day = timestamp.getDate()
	let month = timestamp.getMonth() + 1
	let year = timestamp.getYear() + 1900

	if (day < 10) day = `0${day}`

	if (month < 10) month = `0${month}`

	year = year.toString().substring(2, 4)

	return `${month}/${day}/${year}`
}
