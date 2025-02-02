import isMobilePhone from 'validator/lib/isMobilePhone'

export default function isValidMobilePhone(phone) {
	return isMobilePhone(phone)
}
