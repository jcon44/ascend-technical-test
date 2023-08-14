export default function formatDate(date) {
	let day = date.getDate()
	let month = date.getMonth()
	let year = date.getYear()

	if (day.length < 2) day = `0${day}`
	if (month.length < 2) month = `0${month}`
	if (year.length > 2) year = year.toString().substring(2,4)

	return `${month}/${day}/${year}`
}