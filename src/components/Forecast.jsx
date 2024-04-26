import { iconUrlFromCode } from "../api/weatherApi"

function Forecast({ title, items }) {
  return (
    <div className="mb-10 mt-5">
      <div className="flex items-center justify-start my-2">
        <p className="text-white font-medium uppercase text-xl">{title}</p>
      </div>
      <hr className="my-2" />
      <div className="flex flex-row items-center justify-between text-white ">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center border border-white p-5 rounded-lg cursor-pointe"
          >
            <p className="font-light text-l">{item.title}</p>
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
