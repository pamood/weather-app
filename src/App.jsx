import { useState, useEffect } from "react";
import ToggleTemp from "./components/ToggleTemp";
import TimeLocation from "./components/TimeLocation";
import Details from "./components/Details";
import Forecast from "./components/Forecast";
import LocationInput from "./components/LocationInput";
import getFormattedWeatherData from "./api/weatherApi";

function App() {
  const [query, setQuery] = useState({ q: 'cairo' });
  const [units, setUnits] = useState('metric');
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const data = await getFormattedWeatherData({...query, units});
        setWeather(data); // Set the weather data
        console.log(data)
      } catch (error) {
        console.error("Failed to fetch weather data:", error);
      }
    };

    fetchWeatherData();
  }, [query, units]);

  if (!weather) {
    return <div>Loading...</div>; // Display loading message while fetching data
  }

 return (
  <div className="mx-auto max-w-screen-md py-5 px-32 bg-sky-700 h-fit shadow-xl mt-10">
    <LocationInput setQuery={setQuery} /> 
    {weather && (
      <>
        <ToggleTemp weather={weather} setUnits={setUnits} />
        <TimeLocation weather={weather} />
        <Details weather={weather} />
   <Forecast title="hourly forecast" items={weather.hourly} />
<Forecast title="daily forecast" items={weather.daily} />
      </>
    )}
  </div>
);
}
export default App;
