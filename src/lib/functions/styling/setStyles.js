export default function setStyles(cssRules) {
	for (const [name, value] of Object.entries(cssRules)) {
		document.documentElement.style.setProperty(name, value)
	}
}
