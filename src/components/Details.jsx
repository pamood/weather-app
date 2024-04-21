import React from "react"

import UilTepreature from "@iconscout/react-unicons/icons/uil-temperature"
import UilTear from "@iconscout/react-unicons/icons/uil-tear"
import UilWind from "@iconscout/react-unicons/icons/uil-wind"
import UilSun from "@iconscout/react-unicons/icons/uil-sun"
import UilSunset from "@iconscout/react-unicons/icons/uil-sunset"

function Details() {
  return (
    <div>
      <div className="flex items-center justify-center py-4 text-l text-cyan-200">
        Cloudy
      </div>

      <div className="flex flex-row items-center justify-between text-white py-3">
        <img
          src="http://openweathermap.org/img/wn/04d.png"
          alt=""
          className="w-20"
        />
        <p className="text-5xl">25°</p>
        <div className=" flex flex-col space-y-2">
          <div className="flex font-light text-sm items-center justify-center">
            <UilTepreature size={18} className="mr-1" />
            feels like
            <span className="font-medium ml-1"> 25°</span>
          </div>
          <div className="flex font-light text-sm items-center justify-center">
            <UilTear size={18} className="mr-1" />
            Humidity
            <span className="font-medium ml-1"> 67%</span>
          </div>
          <div className="flex font-light text-sm items-center justify-center">
            <UilWind size={18} className="mr-1" />
            wind
            <span className="font-medium ml-1"> 34 km/h</span>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center space-x-2 text-white text-sm py-3">
        <UilSun />
        <p className="font-light">
          Rise:<span className="font=medium ml-1">6:45 AM</span>
        </p>
        <p className="text-sm font-light">|</p>
        <UilSunset />
        <p className="font-light">
          Set:<span className="font=medium ml-1">6:45 PM</span>
        </p>
        <p className="text-sm font-light">|</p>
        <UilSun />
        <p className="font-light">
          Low:<span className="font=medium ml-1">25°</span>
        </p>
        <p className="text-sm font-light">|</p>
        <UilSun />
        <p className="font-light">
          High:<span className="font=medium ml-1">35°</span>
        </p>
      </div>
    </div>
  )
}

export default Details
