function manufacture(gifts, materials) {
	// Code here
	let returnArr = [];
	let foundString = true;
	for (let i = 0; i < gifts.length; i++) {
		for (let j = 0; j < gifts[i].length; j++) {
			if (!(materials.indexOf(gifts[i][j]) > -1)) {
				foundString = false;
			}
		}
		if (foundString) {
			returnArr.push(gifts[i]);
		}
		foundString = true;
	}
	return returnArr;
}
