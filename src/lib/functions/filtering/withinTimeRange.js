export default function withinTimeRange(start, end, query) {
	const startDate = new Date(`1970-01-01T${start}`)
	const endDate = new Date(`1970-01-01T${end}`)
	const queryDate = new Date(`1970-01-01T${query}`)

	if (startDate <= endDate) {
		return queryDate >= startDate && queryDate <= endDate
	} else {
		return queryDate >= startDate || queryDate <= endDate
	}
}
