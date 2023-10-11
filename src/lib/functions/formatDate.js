export default function formatDate(date) {

	const dateObject = new Date(date)

	let day = dateObject.getDate()
	let month = dateObject.getMonth()
	let year = dateObject.getYear()

	if (day.length < 2) day = `0${day}`
	if (month.length < 2) month = `0${month}`
	if (year.length > 2) year = year.toString().substring(2,4)

	return `${month}/${day}/${year}`

}