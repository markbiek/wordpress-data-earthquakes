import { useSelect } from '@wordpress/data';
import { SETTINGS_STORE_KEY } from './data';

import './App.css';

function App() {
	const period = useSelect((select) => select(SETTINGS_STORE_KEY).getPeriod());
	const magnitude = useSelect((select) =>
		select(SETTINGS_STORE_KEY).getMagnitude()
	);
	const { data, metadata } = useSelect((select) =>
		select(SETTINGS_STORE_KEY).getData(period, magnitude)
	);

	if (!metadata) {
		return (
			<div className='loading'>
				<span className='loader'></span>
			</div>
		);
	}

	const { title } = metadata;

	return (
		<main>
			<section>
				<article>
					<h1>{title}</h1>
				</article>
			</section>
		</main>
	);
}

export default App;
