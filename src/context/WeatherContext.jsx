import { createContext, useState, useEffect } from "react"
import getFormattedWeatherData from "../api/weatherApi"
import { toast } from "react-toastify"

export const WeatherContext = createContext()

export const WeatherProvider = ({ children }) => {
  const [query, setQuery] = useState({})
  const [units, setUnits] = useState("metric")
  const [weather, setWeather] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const fetchWeatherData = async () => {
      if (!query.q && !query.lat && !query.lon) {
        return
      }
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

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setQuery({
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          })
        },
        (error) => {
          if (error.code === error.PERMISSION_DENIED) {
            toast.error("🚫 Permission for geolocation was denied.")
          }
          console.error(error)
        }
      )
    } else {
      toast.error("🚫 Geolocation is not supported by this browser.")
    }
  }, [])

  return (
    <WeatherContext.Provider
      value={{ query, setQuery, units, setUnits, weather, setWeather }}
    >
      {children}
    </WeatherContext.Provider>
  )
}
