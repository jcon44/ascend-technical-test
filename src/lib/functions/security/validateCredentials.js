import { validateEmail, validatePassword } from '$lib/index.js'

export default function validateCredentials(email, password) {
	return validateEmail(email) && validatePassword(password)
}
