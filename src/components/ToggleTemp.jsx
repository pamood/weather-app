import { useState, useContext } from "react"
import { WeatherContext } from "../context/WeatherContext"

function ToggleTemp() {
  const [isCelsius, setIsCelsius] = useState(true)
  const { setUnits } = useContext(WeatherContext)

  const toggleTemperature = () => {
    const newUnit = isCelsius ? "imperial" : "metric"
    setIsCelsius(!isCelsius)
    setUnits(newUnit)
  }

  return (
    <div
      className="flex flex-col justify-center items-center my-6 text-white cursor-pointer transition ease-out hover:scale-110"
      onClick={toggleTemperature}
    >
      {isCelsius ? "Celsius (°C)" : "Fahrenheit (°F)"}
    </div>
  )
}

export default ToggleTemp
