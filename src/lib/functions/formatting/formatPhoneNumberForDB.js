export default function formatPhoneNumberForDB(rawPhoneNumber) {
	return rawPhoneNumber.replaceAll(/[()\- ]/g, '')
}