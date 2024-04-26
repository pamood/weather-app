import { iconUrlFromCode } from "../api/weatherApi";

function Forecast({ title, items }) {
  return (
    <div>
      <div className="flex items-center justify-start my-2">
        <p className="text-white font-medium uppercase">{title}</p>
      </div>
      <hr className="my-2" />
      <div className="flex flex-row items-center justify-between text-white">
        {items.map((item, index) => (
          <div key={index} className="flex flex-col items-center justify-center">
            <p className="font-light text-sm">{item.title}</p>
            <img
              src={iconUrlFromCode(item.icon)}
              alt="Weather Icon"
              className="w-12 my-1"
            />
            <p className="font-medium">{`${item.temp.toFixed(0)}°`}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Forecast;