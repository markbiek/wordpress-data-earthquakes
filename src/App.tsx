import { useDispatch, useSelect } from '@wordpress/data';
import { SETTINGS_STORE_KEY } from './data';

import './App.css';

function App() {
	const { setTimePeriod, setEarthquakeMagnitude } =
		useDispatch(SETTINGS_STORE_KEY);
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

					<form>
						<label htmlFor='period'>Time Period:</label>
						<select
							name='period'
							id='period'
							value={period}
							onChange={(e) => {
								setTimePeriod(e.target.value);
							}}
						>
							<option value='hour'>Hour</option>
							<option value='day'>Day</option>
							<option value='week'>Week</option>
						</select>
					</form>
				</article>
			</section>
		</main>
	);
}

export default App;
