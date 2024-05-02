export default function validatePassword(password) {
	const passwordRegex = /^[a-zA-Z0-9]*$/
	const passingRegex = passwordRegex.test(password)
	return typeof password === 'string' && password.length >= 8 && password.length <= 32 && passingRegex
}
