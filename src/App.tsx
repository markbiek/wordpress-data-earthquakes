import { useSelect } from '@wordpress/data';
import { SETTINGS_STORE_KEY } from './data';

import './App.css';

function App() {
	const period = useSelect((select) => select(SETTINGS_STORE_KEY).getPeriod());
	const magnitude = useSelect((select) =>
		select(SETTINGS_STORE_KEY).getMagnitude()
	);

	return (
		<main>
			<h1>Earthquakes</h1>
			<p>Period: {period}</p>
			<p>Magnitude: {magnitude}</p>
		</main>
	);
}

export default App;
