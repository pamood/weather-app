import UilTemperature from "@iconscout/react-unicons/icons/uil-temperature"
import UilTear from "@iconscout/react-unicons/icons/uil-tear"
import UilWind from "@iconscout/react-unicons/icons/uil-wind"
import UilSun from "@iconscout/react-unicons/icons/uil-sun"
import UilSunset from "@iconscout/react-unicons/icons/uil-sunset"
import { formatToLocalTime, iconUrlFromCode } from "../api/weatherApi"

function Details({ weather }) {
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

      <div className="flex flex-row items-center justify-between text-white py-3">
        <img src={iconUrlFromCode(icon)} alt="Weather Icon" className="w-40" />
        <p className="text-8xl">{`${temp.toFixed(0)}°`}</p>
        <div className="grid grid-cols-3 gap-2">
          <div className="flex items-center justify-end">
            {" "}
            <UilTemperature size={18} />
          </div>
          <div className="font-bold">feels like</div>
          <div>{`${feels_like.toFixed(0)}°`}</div>

          <div className="flex items-center justify-end">
            {" "}
            <UilTear size={18} />
          </div>
          <div className="font-bold">Humidity</div>
          <div>{`${humidity}%`}</div>

          <div className="flex items-center justify-end">
            {" "}
            <UilWind size={18} />
          </div>
          <div className="font-bold">wind </div>
          <div>{`${speed} km/h`}</div>
        </div>
      </div>
      <div className="flex items-center justify-center space-x-2 text-white text-l py-3">
        <UilSun />
        <p className="font-bold">
          Rise :{" "}
          <span className="font-light ml-1">
            {formatToLocalTime(sunrise, timezone, "h:mm a")}
          </span>
        </p>

        <UilSunset />
        <p className="font-bold">
          Set :{" "}
          <span className="font-light ml-1">
            {formatToLocalTime(sunset, timezone, "h:mm a")}
          </span>
        </p>

        <UilSun />
        <p className="font-bold">
          Low :{" "}
          <span className="font-light ml-1">{`${temp_min.toFixed(0)}°`}</span>
        </p>

        <UilSun />
        <p className="font-bold">
          High :{" "}
          <span className="font-light ml-1">{`${temp_max.toFixed(0)}°`}</span>
        </p>
      </div>
    </div>
  )
}

export default Details
