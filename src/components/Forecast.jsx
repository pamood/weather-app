function Forecast({ title }) {
  return (
    <div>
      <div className="flex items-center justify-start my-2">
        <p className="text-white font-medium uppercase">{title}</p>
      </div>
      <hr className="my-3" />
      <div className="flex flex-row items-center justify-between text-white">
        <div className="flex flex-col items-center justify-center">
          <p className="font-light text-sm">04:30 PM</p>
          <img
            src="http://openweathermap.org/img/wn/04d.png"
            alt=""
            className="w-12 my-1"
          />
          <p className="font-medium">22°</p>
        </div>
      </div>
    </div>
  )
}

export default Forecast
