export default function withinDateRange(start, end, query) {

	let withinRange = true

	if (start && end) {

		const startDate = new Date(start)

		const endDate = new Date(end)

		const queryDate = new Date(query)

		withinRange = (
			queryDate >= startDate &&
			queryDate <= endDate
		)

	}

	return withinRange

}