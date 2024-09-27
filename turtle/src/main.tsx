import React from 'react';

import ReactDOM from 'react-dom/client';

import { TurtleApp } from './App';
import './global.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<div className="h-screen">
			<TurtleApp />
		</div>
	</React.StrictMode>
);
