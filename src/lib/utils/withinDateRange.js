export default function withinDateRange(start, end, query) {
	const startDate = new Date(start)
	const endDate = new Date(end)
	const queryDate = new Date(query)

	if (startDate <= endDate) {
		return queryDate >= startDate && queryDate <= endDate
	} else {
		return queryDate >= startDate || queryDate <= endDate
	}
}
