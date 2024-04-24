import { useState } from "react"

function ToggleTemp() {
  const [isCelsius, setIsCelsius] = useState(true)

  const toggleTemperature = () => {
    setIsCelsius(!isCelsius)
  }
  return (
    <div
      className="flex flex-col justify-center items-center my-6 text-white cursor-pointer"
      onClick={toggleTemperature}
    >
      {isCelsius ? "Celsius (°C)" : "Fahrenheit (°F)"}
    </div>
  )
}

export default ToggleTemp
