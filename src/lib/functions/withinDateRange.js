export default function withinDateRange(subscribers, sub) {

	let withinRange = true

	if (subscribers.startDate && subscribers.endDate) {

		const fullStartDate = new Date(subscribers.startDate)

		const fullEndDate = new Date(subscribers.endDate)

		const subDate = new Date(sub.signup)

		withinRange = (
			subDate >= fullStartDate &&
			subDate <= fullEndDate
		)

	}

	return withinRange

}