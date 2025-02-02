import isPostalCode from 'validator/lib/isPostalCode'

export default function isValidZipCode(zipCode, locale = 'US') {
	return isPostalCode(zipCode, locale)
}
