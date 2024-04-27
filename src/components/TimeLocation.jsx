import { formatToLocalTime } from "../api/weatherApi"
import { useContext, useState, useEffect } from "react"
import { WeatherContext } from "../context/WeatherContext"
import Clock from "react-clock"
import "react-clock/dist/Clock.css"

function TimeLocation() {
  const { weather } = useContext(WeatherContext)
  const [date, setDate] = useState(new Date())

  useEffect(() => {
    const interval = setInterval(() => setDate(new Date()), 1000)
    return () => clearInterval(interval)
  }, [])

  if (!weather) {
    return <LoadingMessage />
  }

  const { dt, timezone, name, country } = weather
  const greeting = getGreetingMessage()

  return (
    <div>
      <div className="flex items-center justify-center my-2 space-x-4">
        <AnalogClock date={date} />
        <div className="flex flex-col items-start">
          <GreetingMessage message={greeting} className="text-2xl" />
          <LocalTime dt={dt} timezone={timezone} />
        </div>
      </div>
      <div className="flex justify-center mt-5">
        <Location name={name} country={country} />
      </div>
    </div>
  )
}

function LoadingMessage() {
  return <div>Loading time and location data...</div>
}

function getGreetingMessage() {
  const currentHour = new Date().getHours()
  if (currentHour < 12) {
    return "Good Morning! ☀️"
  } else if (currentHour < 18) {
    return "Good Afternoon 🌤️"
  } else {
    return "Good Evening 🌙"
  }
}

function GreetingMessage({ message }) {
  return (
    <div className="flex items-center justify-center font-medium">
      <p className="text-white text-xl">{message}</p>
    </div>
  )
}

function AnalogClock({ date }) {
  return (
    <div className="bg-white bg-opacity-80 p-2 rounded-full backdrop-filter backdrop-blur-lg">
      <Clock value={date} size={100} />
    </div>
  )
}

function LocalTime({ dt, timezone }) {
  return (
    <p className="text-white">
      {dt && timezone ? formatToLocalTime(dt, timezone) : "Unavailable time"}
    </p>
  )
}

function Location({ name, country }) {
  return (
    <div className="flex items-center justify-center my-3">
      <p className="text-white text-xl font-medium  p-2 rounded-full w-60 text-center bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg">
        {name ? `${name}, ${country}` : "Location unavailable"}
      </p>
    </div>
  )
}

export default TimeLocation
