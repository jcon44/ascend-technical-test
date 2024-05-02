export default function validateEmail(email) {
	if (typeof email !== 'string' || email.length > 255) return false
	const emailRegex = /^.+@.+$/
	const passingRegex = emailRegex.test(email)
	return typeof email === 'string' && email.length >= 8 && email.length <= 256 && passingRegex
}
