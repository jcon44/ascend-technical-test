export default function setStyles(cssRules) {
	for (const [name, value] of Object.entries(cssRules)) {
		document.documentElemtn.style.setProperty(name, value)
	}
}