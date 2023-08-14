export default function parseURL(url) {
	if (url) return [ ...url.split('/') ]
	else return ''
}