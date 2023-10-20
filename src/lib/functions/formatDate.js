export default function formatDate(timestamp) {

	let day = timestamp.getDate() + 1
	let month = timestamp.getMonth() + 1
	let year = timestamp.getYear() + 1900

	if (day.length < 2) day = `0${day}`
	if (month.length < 2) month = `0${month}`
	if (year.length > 2) year = year.toString().substring(2,4)

	return `${month}/${day}/${year}`

}