export function replaceArrayItem<T>(
	array: Array<T>,
	elem: T,
	newElem: T
): Array<T> {
	const newArray = array
	const elementIndex = array.indexOf(elem)

	if (elementIndex === -1) {
		console.log('Element does`t exist in this array')
		return array
	}

	newArray[elementIndex] = newElem

	return newArray
}
