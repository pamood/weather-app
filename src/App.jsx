import ToggleTemp from "./components/ToggleTemp"
import TimeLocation from "./components/TimeLocation"
import Details from "./components/Details"
import Forecast from "./components/Forecast"
import LocationInput from "./components/LocationInput"
import getFormattedWeatherData from "./api/weatherService"
import { useEffect } from "react"

function App() {
  useEffect(() => {
    const fetchWeatherData = async () => {
      const data = await getFormattedWeatherData({ city: "London" })
      if (data === "Network Error!") alert("Network Error!")
      console.log(data)
    }

    fetchWeatherData()
  }, [])

  return (
    <div className="mx-auto max-w-screen-md py-5 px-32 bg-sky-700 h-fit shadow-xl mt-10">
      {/* <TopButton /> */}
      <LocationInput />
      <ToggleTemp />
      <TimeLocation />
      <Details />
      <Forecast title="hourly forecast" />
      <Forecast title="daily forecast" />
    </div>
  )
}

export default App
