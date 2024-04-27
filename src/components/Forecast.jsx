import { iconUrlFromCode } from "../api/weatherApi"

function Forecast({ title, items }) {
  return (
    <div className="mb-10 mt-5">
      <div className="flex items-center justify-center my-2">
        <p className="text-white font-medium uppercase text-xl">{title}</p>
      </div>
      <hr className="my-2 border-0 bg-gradient-to-r from-transparent via-white to-transparent h-0.5" />
      <div className="flex flex-row items-center justify-between ">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center  bg-white bg-opacity-30 p-5 rounded-lg cursor-pointer mt-2 backdrop-filter backdrop-blur-lg text-white"
          >
            <p className="font-bold text-l">{item.title}</p>
            <img
              src={iconUrlFromCode(item.icon)}
              alt="Weather Icon"
              className="w-20 my-1"
            />
            <p className="font-medium text-l">{`${item.temp.toFixed(0)}°`}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Forecast
