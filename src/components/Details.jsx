import { useContext } from "react"
import UilTemperature from "@iconscout/react-unicons/icons/uil-temperature"
import UilTear from "@iconscout/react-unicons/icons/uil-tear"
import UilWind from "@iconscout/react-unicons/icons/uil-wind"
import UilSun from "@iconscout/react-unicons/icons/uil-sun"
import UilSunset from "@iconscout/react-unicons/icons/uil-sunset"
import { formatToLocalTime, iconUrlFromCode } from "../api/weatherApi"
import { WeatherContext } from "../context/WeatherContext"

function Details() {
  const { weather } = useContext(WeatherContext)
  const {
    description,
    icon,
    temp,
    temp_min,
    temp_max,
    sunrise,
    sunset,
    speed,
    humidity,
    feels_like,
    timezone,
  } = weather

  return (
    <div>
      <div className="flex items-center justify-center py-4 text-xl text-white font-medim">
        {description}
      </div>

      <div className="flex flex-col items-center  text-white py-2">
        <div className="flex items-center justify-center w-full">
          <img
            src={iconUrlFromCode(icon)}
            alt="Weather Icon"
            className="w-40"
          />
          <p className="text-8xl">{`${temp.toFixed(0)}°`}</p>
        </div>
        <div className="flex justify-between w-full mt-4">
          <div className="flex flex-col items-center">
            <UilTemperature size={18} />
            <p className="font-bold">feels like</p>
            <p>{`${feels_like.toFixed(0)}°`}</p>
          </div>
          <div className="flex flex-col items-center">
            <UilTear size={18} />
            <p className="font-bold">Humidity</p>
            <p>{`${humidity}%`}</p>
          </div>
          <div className="flex flex-col items-center">
            <UilWind size={18} />
            <p className="font-bold">wind</p>
            <p>{`${speed} km/h`}</p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between space-x-2 text-white text-l py-3">
        <div className="flex-1 bg-white bg-opacity-20 p-2 rounded backdrop-filter backdrop-blur-lg">
          <UilSun />
          <p className="font-bold">
            Rise :{" "}
            <span className="font-light ml-1">
              {formatToLocalTime(sunrise, timezone, "h:mm a")}
            </span>
          </p>
        </div>

        <div className="flex-1 bg-white bg-opacity-20 p-2 rounded backdrop-filter backdrop-blur-lg">
          <UilSunset />
          <p className="font-bold">
            Set :{" "}
            <span className="font-light ml-1">
              {formatToLocalTime(sunset, timezone, "h:mm a")}
            </span>
          </p>
        </div>

        <div className="flex-1 bg-white bg-opacity-20 p-2 rounded backdrop-filter backdrop-blur-lg">
          <UilSun />
          <p className="font-bold">
            Low :{" "}
            <span className="font-light ml-1">{`${temp_min.toFixed(0)}°`}</span>
          </p>
        </div>

        <div className="flex-1 bg-white bg-opacity-20 p-2 rounded backdrop-filter backdrop-blur-lg">
          <UilSun />
          <p className="font-bold">
            High :{" "}
            <span className="font-light ml-1">{`${temp_max.toFixed(0)}°`}</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Details
