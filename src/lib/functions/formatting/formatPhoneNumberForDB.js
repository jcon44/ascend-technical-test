export default function formatPhoneNumberForDB(rawPhoneNumber) {
	return rawPhoneNumber.replaceAll(/[^0-9]+/, '')
}