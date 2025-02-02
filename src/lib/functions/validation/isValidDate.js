import isDate from 'validator/lib/isDate'

export default function isValidDate(date) {
	return isDate(date)
}
