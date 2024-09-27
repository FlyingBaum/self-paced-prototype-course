import { Turtle } from 'better-turtle';

/**
 * Helper function to check against time.
 * @param {number} startTime The start time to check against.
 * @throws An error if the code has run for too long.
 */
const checkAgainstTime = (startTime) => {
	if (Date.now() - startTime > 7000) {
		throw new Error(
			'Code hat zu lang gebraucht. Hast du eine unendlich lange Anweisung ausgeführt?'
		);
	}
};

/**
 * Helper function to instrument the user's code to prevent infinite loops.
 * @param {string} code The user's code.
 * @returns {string} The instrumented code.
 **/
const instrumentCode = (code) => {
	const lines = code.split('\n');
	const instrumentedLines = [];

	for (let i = 0; i < lines.length; i++) {
		const trimmedLine = lines[i].replace(/\s/g, '');

		instrumentedLines.push(lines[i]);

		// Add the time check after the start of each `for` or `while` loop
		if (trimmedLine.startsWith('for(') || trimmedLine.startsWith('while(')) {
			instrumentedLines.push('checkAgainstTime(startTime);');
		}
	}

	return instrumentedLines.join('\n');
};

/**
 * Listen for messages from the main thread.
 * @param {MessageEvent} event The message event.
 */
self.onmessage = (event) => {
	const { code, canvasData, command } = event.data;
	if (command === 'stop') {
		self.close();
	}

	const { width, height } = canvasData;

	const offscreenCanvas = new OffscreenCanvas(width, height);
	const ctx = offscreenCanvas.getContext('2d');

	const turtle = new Turtle(ctx);
	const userCode = `
	const checkAgainstTime = ${checkAgainstTime.toString()};
	let turtle = arguments[0];
	const startTime = Date.now();
	${instrumentCode(code)}`;

	// Run the user's code and send the result back to the main thread. If there is an error, send the error message back.
	try {
		const func = new Function(userCode);
		func(turtle);
		self.postMessage({
			success: true,
			imageData: ctx.getImageData(0, 0, width, height),
		});
	} catch (e) {
		self.postMessage({ success: false, error: e.message });
		// Sleep for a bit to allow the main thread to handle the error message.
		setTimeout(() => {}, 1000);
		self.close();
	}
};
