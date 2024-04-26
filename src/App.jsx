import { useState, useEffect } from "react"
import ToggleTemp from "./components/ToggleTemp"
import TimeLocation from "./components/TimeLocation"
import Details from "./components/Details"
import Forecast from "./components/Forecast"
import LocationInput from "./components/LocationInput"
import TopButton from "./components/TopButton"
import getFormattedWeatherData from "./api/weatherApi"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

function App() {
  const [query, setQuery] = useState({ q: "" })
  const [units, setUnits] = useState("metric")
  const [weather, setWeather] = useState(null)

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const data = await getFormattedWeatherData({ ...query, units })

        setWeather(data) // Set the weather data
        console.log(data)
      } catch (error) {
        console.error("Failed to fetch weather data:", error)
      }
    }

    fetchWeatherData()
  }, [query, units])

  const formatBg = () => {
    if (!weather) return "bg-sky-700"
    const threshold = units === "metric" ? 20 : 60
    if (weather.temp <= threshold) return "bg-sky-600"
    return "bg-orange-600"
  }
  return (
    <div className={`${formatBg()}`}>
      <div className="mx-auto max-w-screen-md py-5 px-16 h-fit mt-10">
        <TopButton setQuery={setQuery} />
        <LocationInput
          setQuery={setQuery}
          units={setUnits}
          setUnits={setQuery}
        />
        <ToggleTemp weather={weather} setUnits={setUnits} />
        {weather && (
          <>
            <TimeLocation weather={weather} />
            <Details weather={weather} />
            <Forecast title="hourly forecast" items={weather.hourly} />
            <Forecast title="daily forecast" items={weather.daily} />
          </>
        )}
      </div>
      <ToastContainer
        position="top-center"
        autoClose={4000}
        theme="light"
        newestOnTop={true}
        closeOnClick={true}
      />
    </div>
  )
}
export default App
