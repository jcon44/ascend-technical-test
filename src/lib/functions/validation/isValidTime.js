import isTime from 'validator/lib/isTime'

export default function isValidTime(time) {
    return isTime(time)
}