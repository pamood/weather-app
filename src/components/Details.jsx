import UilTemperature from "@iconscout/react-unicons/icons/uil-temperature";
import UilTear from "@iconscout/react-unicons/icons/uil-tear";
import UilWind from "@iconscout/react-unicons/icons/uil-wind";
import UilSun from "@iconscout/react-unicons/icons/uil-sun";
import UilSunset from "@iconscout/react-unicons/icons/uil-sunset";
import { formatToLocalTime, iconUrlFromCode } from '../api/weatherApi';

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
    timezone
  } = weather;

  return (
    <div>
      <div className="flex items-center justify-center py-4 text-l text-cyan-200">
        {description}
      </div>

      <div className="flex flex-row items-center justify-between text-white py-3">
        <img
          src={iconUrlFromCode(icon)}
          alt="Weather Icon"
          className="w-20"
        />
        <p className="text-5xl">{`${temp.toFixed(0)}°`}</p>
        <div className=" flex flex-col space-y-2">
          <div className="flex font-light text-sm items-center justify-center">
            <UilTemperature size={18} className="mr-1" />
            feels like
            <span className="font-medium ml-1">{`${feels_like.toFixed(0)}°`}</span>
          </div>
          <div className="flex font-light text-sm items-center justify-center">
            <UilTear size={18} className="mr-1" />
            Humidity
            <span className="font-medium ml-1">{`${humidity}%`}</span>
          </div>
          <div className="flex font-light text-sm items-center justify-center">
            <UilWind size={18} className="mr-1" />
            wind
            <span className="font-medium ml-1">{`${speed} km/h`}</span>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center space-x-2 text-white text-sm py-3">
        <UilSun />
        <p className="font-light">
          Rise: <span className="font-medium ml-1">{formatToLocalTime(sunrise, timezone, 'h:mm a')}</span>
        </p>
        <p className="text-sm font-light">|</p>
        <UilSunset />
        <p className="font-light">
          Set: <span className="font-medium ml-1">{formatToLocalTime(sunset, timezone, 'h:mm a')}</span>
        </p>
        <p className="text-sm font-light">|</p>
        <UilSun />
        <p className="font-light">
          Low: <span className="font-medium ml-1">{`${temp_min.toFixed(0)}°`}</span>
        </p>
        <p className="text-sm font-light">|</p>
        <UilSun />
        <p className="font-light">
          High: <span className="font-medium ml-1">{`${temp_max.toFixed(0)}°`}</span>
        </p>
      </div>
    </div>
  );
}

export default Details;
