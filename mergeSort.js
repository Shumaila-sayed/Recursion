function mergeSort(array) {
	if (array.length === 1) {
		return array;
	}
	const half = Math.ceil(array.length / 2);
	const firstHalf = array.slice(0, half);
	const secondHalf = array.slice(half);
	let newArray = mergeSort(firstHalf).concat(mergeSort(secondHalf));
	let sortedArray = [];
	for (let i = 0; i < array.length; i++) {
		let minNumber = Math.min(...newArray);
		const position = newArray.findIndex((number) => number === minNumber);
		newArray.splice(position, 1);
		sortedArray.push(minNumber);
	}
	return sortedArray;
}
console.log(mergeSort([3, 1, 2, 4])); // returns [1, 2, 3, 4]
console.log(mergeSort([1, 2, 4, 3])); // returns [1, 2, 3, 4]
console.log(mergeSort([3, 4, 1, 2, 2])); // returns [1, 2, 2, 3, 4]
console.log(mergeSort([1, 1, 9, 6, 3, 4, 2, 5])); // returns [1, 1, 2, 3, 4, 5, 6, 9]
