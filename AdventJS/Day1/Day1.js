function findFirstRepeated(gifts) {
	// Code here
	let giftsObj = {};
	for (let i = 0; i < gifts.length; i++) {
		if (gifts[i] in giftsObj) {
			return gifts[i];
		} else {
			giftsObj[gifts[i]] = true;
		}
	}
	return -1;
}
