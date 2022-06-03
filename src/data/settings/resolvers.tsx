export const getData =
	(period, magnitude) =>
	async ({ dispatch }) => {
		if (!period || !magnitude) {
			return;
		}

		const url = `https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/${magnitude}_${period}.geojson`;
		const resp = await fetch(url);
		const json = await resp.json();

		dispatch.setEarthquakeData(json.features);
		dispatch.setEarthquakeMetadata(json.metadata);
	};
