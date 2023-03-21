export function removeArrayElement<T>(array: Array<T>, elem: T): Array<T> {
	let newArray = array
	const elementIndex = array.indexOf(elem)
	if (elementIndex === -1) {
		console.log('Element does`t exist in this array')
		return array
	}
	newArray = array
		.slice(0, elementIndex)
		.concat(array.slice(elementIndex + 1, array.length))

	return newArray
}
