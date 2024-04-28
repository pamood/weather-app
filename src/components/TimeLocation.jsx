import { useContext } from "react"
import { WeatherContext } from "../context/WeatherContext"
import { formatToLocalTime } from "../api/weatherApi"

function TimeLocation() {
  const { weather } = useContext(WeatherContext)

  if (!weather) {
    return <LoadingMessage />
  }

  const { dt, timezone, name, country } = weather

  return (
    <div className="flex items-center justify-center my-2 space-x-4">
      <div className="flex flex-col items-center">
        <LocalTime dt={dt} timezone={timezone} />
        <Location name={name} country={country} />
      </div>
    </div>
  )
}

function LoadingMessage() {
  return <div>Loading time and location data...</div>
}

function LocalTime({ dt, timezone }) {
  return (
    <p className="text-white text-lg">
      {dt && timezone ? formatToLocalTime(dt, timezone) : "Unavailable time"}
    </p>
  )
}

function Location({ name, country }) {
  return (
    <div className="flex items-center justify-center my-3">
      <p className="text-white text-xl font-medium p-2 rounded-full w-72 text-center bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg">
        {name ? `${name}, ${country}` : "Location unavailable"}
      </p>
    </div>
  )
}

export default TimeLocation
