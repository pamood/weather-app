import { formatToLocalTime } from "../api/weatherApi"

function TimeLocation({ weather }) {
  if (!weather) {
    return <div>Loading time and location data...</div>
  }

  const { dt, timezone, name, country } = weather

  return (
    <div>
      <div className="flex items-center justify-center my-6">
        <p className="text-white text-lg">
          {dt && timezone
            ? formatToLocalTime(dt, timezone)
            : "Unavailable time"}
        </p>
      </div>
      <div className="flex items-center justify-center my-3">
        <p className="text-white text-xl font-medium border border-white p-2 rounded-full w-60 text-center">
          {name ? `${name}, ${country}` : "Location unavailable"}
        </p>
      </div>
    </div>
  )
}

export default TimeLocation
