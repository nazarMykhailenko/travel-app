export function toTitleCase(string: string): string {
	const words: string[] = []
	let start = 0
	let isFirst = false

	for (let i = 1; i < string.length; i++) {
		if (string[i] === string[i].toUpperCase()) {
			let word = string.slice(start, i)
			isFirst && words.push(word.toLowerCase())
			!isFirst && words.push(word)
			start = i
			isFirst = true
		}
	}
	words.push(string.slice(start).toLowerCase())

	words[0] = words[0][0].toUpperCase() + words[0].slice(1)

	return words.join(' ')
}
