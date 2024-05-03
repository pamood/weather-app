import { createContext, useState, useEffect } from "react"
import getFormattedWeatherData from "../api/weatherApi"
import { toast } from "react-toastify"
import Spinner from "../components/Spinner"

export const WeatherContext = createContext()

export const WeatherProvider = ({ children }) => {
  const [query, setQuery] = useState({})
  const [units, setUnits] = useState("metric")
  const [weather, setWeather] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [isFirstRender, setIsFirstRender] = useState(true) //

  useEffect(() => {
    const fetchWeatherData = async () => {
      if (!query.q && !query.lat && !query.lon) {
        return
      }
      setIsLoading(true)
      try {
        const data = await getFormattedWeatherData({ ...query, units })
        if (data.cod === "404") {
          toast.error("🚫 The entered location was not found.")
          setIsLoading(false)
          return
        }
        setWeather(data)
        setIsFirstRender(false) // Set isFirstRender to false after the first data fetch
        console.log(data)
      } catch (error) {
        console.error(error)
        toast.error(
          "🚫 An error occurred while fetching the weather data, Wrong input."
        )
      }
      setIsLoading(false)
    }

    fetchWeatherData()
  }, [query, units])

  useEffect(() => {
    // Fetch weather data based on geolocation
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
      {isFirstRender && isLoading ? <Spinner /> : children}{" "}
    </WeatherContext.Provider>
  )
}
