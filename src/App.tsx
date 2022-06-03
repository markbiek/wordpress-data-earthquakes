import { useDispatch, useSelect } from '@wordpress/data';
import { SETTINGS_STORE_KEY } from './data';

import external from './img/external.svg';
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
	console.log({ data });

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

						<label htmlFor='magnitude'>Magnitude:</label>
						<select
							name='magnitude'
							id='magnitude'
							value={magnitude}
							onChange={(e) => {
								setEarthquakeMagnitude(e.target.value);
							}}
						>
							<option value='significant'>Significant</option>
							<option value='4.5'>4.5+</option>
							<option value='2.5'>2.5+</option>
							<option value='1.0'>1.0+</option>
							<option value='all'>All</option>
						</select>
					</form>
				</article>
				<article>
					{data.length <= 0 && (
						<p>No earthquakes for this time-period/magnitude.</p>
					)}
					{data.length > 0 && (
						<>
							<h2>Earthquakes</h2>
							<table>
								<thead>
									<tr>
										<th>Magnitude</th>
										<th>Place</th>
										<th></th>
									</tr>
								</thead>
								{data.map((item) => {
									const {
										id,
										properties: { place, mag, url },
									} = item;
									return (
										<tr key={id}>
											<td>{mag}</td>
											<td>{place}</td>
											<td>
												<a
													href={url}
													className='details-link'
													target='_blank'
													rel='noopener'
												>
													<img src={external} />
												</a>
											</td>
										</tr>
									);
								})}
							</table>
						</>
					)}
				</article>
			</section>
		</main>
	);
}

export default App;
