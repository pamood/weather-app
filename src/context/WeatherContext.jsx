import { createContext, useState, useEffect } from "react"
import getFormattedWeatherData from "../api/weatherApi"

export const WeatherContext = createContext()

export const WeatherProvider = ({ children }) => {
  const [query, setQuery] = useState({ q: "colombo" })
  const [units, setUnits] = useState("metric")
  const [weather, setWeather] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const fetchWeatherData = async () => {
      setIsLoading(true)
      try {
        const data = await getFormattedWeatherData({ ...query, units })
        setWeather(data)
      } catch (error) {
        console.error(error)
      }
      setIsLoading(false)
    }
    fetchWeatherData()
  }, [query, units])

  return (
    <WeatherContext.Provider
      value={{ query, setQuery, units, setUnits, weather, setWeather }}
    >
      {children}
    </WeatherContext.Provider>
  )
}
