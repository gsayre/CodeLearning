function findNaughtyStep(original, modified) {
	// Code here
	let returnChar = "";
	let longerString = "";
	let shorterString = "";
	if (original.length > modified.length) {
		longerString = original;
		shorterString = modified;
	} else {
		shorterString = original;
		longerString = modified;
	}
	for (let i = 0; i < longerString.length; i++) {
		if (longerString.charAt(i) !== shorterString.charAt(i)) {
			returnChar = longerString.charAt(i);
			break;
		}
	}
	return returnChar;
}
