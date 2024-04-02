export default function convertDBDateToJSDate(dbDate) {
	const jsDate = new Date(dbDate)
	const month = jsDate?.getMonth() + 1 || ''
	const date = jsDate?.getDate() || ''
	const year = jsDate?.getFullYear() || ''
	const jsDateString = `${month}/${date}/${year}`
	return jsDateString
}
