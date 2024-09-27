import React, { useRef, useState } from 'react';

import { CodeSnippet } from '@codary/code';
import { EditorFile } from '@codary/code/@types';

import { Canvas } from './Canvas';
import { Button } from '../../ui';

const INITIAL_CODE = `
turtle.forward(100);
turtle.right(90);
turtle.forward(100);
turtle.right(90);
turtle.forward(100);
turtle.right(90);
turtle.forward(100);
`;

interface TurtleEditorViewProps {
	initialCode?: string;
}

/**
 * This component can be used to visualize the Turtle Editor View which consists of a code editor,
 * a canvas and buttons to execute the code and clear the canvas.
 */
export const TurtleEditorView: React.FC<TurtleEditorViewProps> = ({
	initialCode = INITIAL_CODE,
}): JSX.Element => {
	const canvasRef = useRef<HTMLCanvasElement>(null);
	const [code, setCode] = useState(initialCode);
	const [error, setError] = useState<string | null>(null);

	const editorFile: EditorFile = {
		id: '1',
		name: 'turtle.js',
		code,
	};

	const handleCodeChange = (newCode: string) => {
		setCode(newCode);
	};

	const handleCtrlEnter = (newCode: string) => {
		executeCode(newCode);
	};

	/**
	 * This functions employs a web worker to execute the given code on the canvas safely.
	 * @param code The code to be executed.
	 */
	const executeCode = (code: string) => {
		setError(null);

		if (!canvasRef.current) {
			return;
		}

		const canvas = canvasRef.current;
		const ctx = canvas.getContext('2d');
		if (!ctx) {
			return;
		}

		ctx.clearRect(0, 0, canvas.width, canvas.height);

		const canvasData = {
			width: canvas.width,
			height: canvas.height,
		};

		// Create a new turtle worker instance.
		const worker = new Worker(new URL('../turtleWorker.js', import.meta.url));

		// Send the code and canvas data to the turtle worker.
		worker.postMessage({ code, canvasData });

		// Listen for a response from the turtle worker.
		worker.onmessage = (event) => {
			const { data } = event;
			if (data.success) {
				ctx.putImageData(data.imageData, 0, 0);
			} else {
				data.error
					? setError(data.error as string)
					: setError('An unknown error occurred.');

				// This will make the worker stop itself after it is done sleeping in case of an error.
				worker.postMessage({ command: 'stop' });
			}
			// Kill the worker after it's done.
			worker.terminate();
		};
	};

	return (
		<>
			<div className="flex w-full flex-row space-x-4">
				<div className="max-h-[500px] w-full overflow-y-auto rounded-lg border-2 border-primary-200">
					<CodeSnippet
						file={editorFile}
						language="javascript"
						onChange={handleCodeChange}
						onCtrlEnter={handleCtrlEnter}
						pastedCode={undefined}
						className="max-h-[500px] overflow-y-auto"
					/>
				</div>
				<div className="relative">
					<Canvas
						ref={canvasRef}
						width={450}
						height={450}
						className="max-h-[450px] max-w-[450px]"
					/>
					{error && (
						<div className="absolute bottom-4 left-0 right-0 z-10 rounded-md border-2 border-primary-200 bg-primary-800 p-2 text-center text-error">
							{error}
						</div>
					)}
				</div>
			</div>
			<div className="mt-5 flex justify-between">
				<Button onClick={() => executeCode(code)}>Ausführen</Button>
				<Button
					onClick={() => {
						if (canvasRef.current) {
							const canvas = canvasRef.current;
							const ctx = canvas.getContext('2d');
							if (ctx) {
								ctx.clearRect(0, 0, canvas.width, canvas.height);
							}
						}
					}}
				>
					Leeren
				</Button>
			</div>
		</>
	);
};
