import { DateTime } from "luxon"

const API_KEY = "756fab1e80ccd69dd0e21599ee7d84cd"
const BASE_URL = "https://api.openweathermap.org/data/"

const endpoints = {
  current: `${BASE_URL}2.5/weather`,
  onecall: `${BASE_URL}3.0/onecall`,
}

async function awaitable(promise) {
  return promise.then((data) => [data, null]).catch((err) => [null, err])
}

const default_date_format = "cccc dd LLL yyyy'|Local time: 'hh:mm a"

function getWeatherData(infotype, searchParams) {
  return new Promise((resolve, reject) => {
    ;(async () => {
      const [current_data_raw, current_data_err] = await awaitable(
        fetch(`${endpoints["current"]}?q=${searchParams.city}&appid=${API_KEY}`)
      )

      if (current_data_err) return null

      const current_data = await current_data_raw.json()

      const coordinates = current_data.coord
      const exclude_data = "alerts"

      const [all_data_raw, all_data_err] = await awaitable(
        fetch(
          `${endpoints["onecall"]}?lat=${coordinates.lat}&lon=${coordinates.lon}&exclude=${exclude_data}&appid=${API_KEY}`
        )
      )

      if (all_data_err) return null
      return await all_data_raw.json()
    })().then((data) => {
      if (data) resolve(data)
      else reject("Network Error!")
    })
  })
}

function formatToLocalTime(secs, zone, format = default_date_format) {
  return DateTime.fromSeconds(secs).setZone(zone).toFormat(format)
}

function formatFutureWeather(data) {
  let { timezone, daily, hourly } = data

  daily = daily.slice(1, 6).map((d) => {
    return {
      title: formatToLocalTime(d.dt, timezone, "ccc"),
      temp: d.temp.day,
      icon: d.weather[0].icon,
    }
  })

  hourly = hourly.slice(1, 6).map((d) => {
    return {
      title: formatToLocalTime(d.dt, timezone, "hh:mm a"),
      temp: d.temp.day,
      icon: d.weather[0].icon,
    }
  })

  return { timezone, daily, hourly }
}

function parseWeatherData(data) {
  const future_weather = formatFutureWeather(data)

  const current_data = data.current

  const weather_data = {
    ...future_weather,
    coord: { lon: data.lon, lat: data.lat },
    current: {
      dt: current_data.dt,
      sunrise: current_data.sunrise,
      sunset: current_data.sunset,
      temp: current_data.temp,
      feels_like: current_data.feels_like,
      pressure: current_data.pressure,
      humidity: current_data.humidity,
      dew_point: current_data.dew_point,
      uvi: current_data.uvi,
      clouds: current_data.clouds,
      visibility: current_data.visibility,
      wind_speed: current_data.wind_speed,
      wind_deg: current_data.wind_deg,
      wind_gust: current_data.wind_gust,
      description:
        (current_data.weather && current_data.weather[0].description) ?? null,
      main: (current_data.weather && current_data.weather[0].main) ?? null,
      icon: (current_data.weather && current_data.weather[0].icon) ?? null,
    },
  }

  return weather_data
}

const getFormattedWeatherData = async (searchParams) => {
  const formattedCurrentWeather = await getWeatherData("weather", searchParams)
    .then(parseWeatherData)
    .catch((err) => err)

  return formattedCurrentWeather
}

export default getFormattedWeatherData
