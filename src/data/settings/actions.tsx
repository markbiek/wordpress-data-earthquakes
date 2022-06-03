type TimePeriod = "hour" | "day" | "week";
type EarthquakeMagnitude = "significant" | "m4.5" | "m2.5" | "m1.0" | "all";

export const setTimePeriod = (period: TimePeriod) => ({
  type: "SET_TIME_PERIOD" as const,
  period
});

export const setEarthquakeType = (magnitude: EarthquakeMagnitude) => ({
  type: "SET_EARTHQUAKE_TYPE" as const,
  magnitude
});

export const setEarthquakeData = (data) => ({
  type: "SET_EARTHQUAKE_DATA" as const,
  data
});
