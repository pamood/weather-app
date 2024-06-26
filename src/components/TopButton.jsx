import { useContext } from "react"
import { WeatherContext } from "../context/WeatherContext"

function TopButton() {
  const { setQuery } = useContext(WeatherContext)
  const cities = [
    { id: 1, title: "London" },
    { id: 2, title: "Paris" },
    { id: 3, title: "Sydney" },
    { id: 4, title: "New York" },
    { id: 5, title: "Tokyo" },
    { id: 6, title: "Berlin" },
  ]

  return (
    <div className="flex items-center justify-around my-6">
      {cities.map((city) => (
        <button
          key={city.id}
          className="text-white text-lg font-sm  ease-out hover:scale-110"
          onClick={() => setQuery({ q: city.title })}
        >
          {city.title}
        </button>
      ))}
    </div>
  )
}
export default TopButton
