import { forwardRef } from 'react';

interface CanvasProps {
	width: number;
	height: number;
	className?: string;
}

/**
 * Canvas component to render turtle graphics.
 *
 * This component uses forwardRef to allow a parent component to get a reference
 * to the HTMLCanvasElement.
 */
export const Canvas = forwardRef<HTMLCanvasElement, CanvasProps>(
	({ width, height, className }, ref) => {
		return (
			<div className="rounded-lg border-4 border-solid border-primary-200 bg-white p-4">
				<canvas ref={ref} width={width} height={height} className={className} />
			</div>
		);
	}
);

Canvas.displayName = 'Canvas';
