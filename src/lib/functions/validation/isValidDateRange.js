import { isValidDate } from '$lib/index.js'
import isAfter from 'validator/lib/isAfter'
import isBefore from 'validator/lib/isBefore'

export default function isValidDateRange(start, end) {
	if (isValidDate(start) && isValidDate(end)) {
		return isAfter(end, { comparisonDate: start }) && isBefore(start, { comparisonDate: end })
	} else {
		return false
	}
}
