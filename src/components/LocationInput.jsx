import { useState } from "react"
import { AiOutlineSearch } from "react-icons/ai"
import { MdLocationOn } from "react-icons/md"
import { toast } from "react-toastify"

function LocationInput({ setQuery }) {
  const [city, setCity] = useState("")

  const handleSearchClick = (e) => {
    e.preventDefault()
    if (city.trim() !== "") {
      setQuery({ q: city.trim() }) // Set query with trimmed city value
    }
  }

  const handleLocationClick = (e) => {
    e.preventDefault()
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          toast.success("📍 Location fetched!", {
            theme: "light",
          })
          setQuery({
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          })
        },
        (error) => {
          switch (error.code) {
            case error.PERMISSION_DENIED:
              toast.error("Denied the request for Geolocation.")
              break
            case error.POSITION_UNAVAILABLE:
              toast.error("Location information is unavailable.")
              break
            case error.TIMEOUT:
              toast.error("The request to get user location timed out.")
              break
            case error.UNKNOWN_ERROR:
              toast.error("An unknown error occurred.")
              break
          }
        }
      )
    } else {
      toast.error("Geolocation is not supported by this browser.")
    }
  }
  return (
    <div className="flex flex-col justify-center items-center my-6">
      <form
        onSubmit={handleSearchClick} // Handle form submission
        className="max-w-[480px] w-full px-4 relative focus:outline-none"
      >
        <div className="relative focus:outline-none">
          <input
            value={city}
            onChange={(e) => setCity(e.currentTarget.value)}
            type="text"
            className="w-full border h-12 shadow p-4 pr-12 rounded-full dark:text-gray-800 dark:bg-gray-200 focus:outline-none"
            placeholder="Search for a city..."
          />
          <button
            type="submit" // Use type="submit" for search button
            className="absolute right-10 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-sky-600 transition-colors duration-300 text-lg focus:outline-none"
          >
            <AiOutlineSearch />
          </button>
          <button
            type="button" // Use type="button" for location button
            onClick={handleLocationClick}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-sky-600 transition-colors duration-300 text-lg focus:outline-none"
          >
            <MdLocationOn />
          </button>
        </div>
      </form>
    </div>
  )
}

export default LocationInput
