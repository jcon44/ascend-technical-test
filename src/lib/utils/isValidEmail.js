export default function isValidEmail(email) {
	if (typeof email !== 'string' || email.length > 255) return false
	const emailRegex = /^.+@.+$/
	return emailRegex.test(email)
}
