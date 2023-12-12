function decode(message) {
	// Code here
	let finalWord = message;
	reverseWords(message, 0, 0, finalWord);
}

function reverseWords(message, startIndx, endIndx, finalWord) {
	let parenStack = 0;
	let sIdx = 0;
	let eIdx = 0;
	if (message.includes("(") || message.includes(")")) {
		for (let i = 0; i < message.length; i++) {
			if (message.charAt(i) === "(") {
				parenStack++;
				sIdx = i + 1;
			} else if (message.charAt(i) === "(" && parenStack > 1) {
				parenStack++;
			} else if (message.charAt(i) === ")" && parenStack > 1) {
				parenStack--;
			} else if (message.charAt(i) === ")" && parenStack === 1) {
				parenStack--;
				eIdx = i - 1;
			}
		}
		reverseWords(message, sIdx, eIdx, finalWord);
	}
	let messageReversed = "";
	for (let j = message.length - 1; j > 0; j--) {
		messageReversed += messageCleaned[j];
	}
}
