import Forecast from "./Forecast"

function ForecastWrapper({ weather }) {
  if (!weather) return null

  return (
    <>
      <Forecast title="hourly forecast" items={weather.hourly} />
      <Forecast title="daily forecast" items={weather.daily} />
    </>
  )
}

export default ForecastWrapper
