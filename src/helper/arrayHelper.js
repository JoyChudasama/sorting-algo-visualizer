const getArrayOfRandomValues = (length = 100, min = 100, max = 700) => {
	const tempArray = [];
	for (let i = 0; i < length; i++) {
		tempArray.push(getRandomNumber(min, max));
	}
	return tempArray;
};

const getRandomNumber = (min, max) => {
	return Math.floor(Math.random() * (max - min + 1)) + min;
};

const swapGivenIndicesValuesOfArray = (idx1, idx2, array) => {
	[array[idx1], array[idx2]] = [array[idx2], array[idx1]];
};

export {
	getArrayOfRandomValues,
	getRandomNumber,
	swapGivenIndicesValuesOfArray,
};
