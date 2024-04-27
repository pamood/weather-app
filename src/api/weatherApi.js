import { DateTime } from "luxon" // Assuming you're using Luxon for date manipulation

const API_KEY = "756fab1e80ccd69dd0e21599ee7d84cd"
const BASE_URL = "https://api.openweathermap.org/data/"

const endpoints = {
  current: `${BASE_URL}/2.5/weather`,
  onecall: `${BASE_URL}/3.0/onecall`,
}

const getWeatherData = (searchParams) => {
  const params = new URLSearchParams({ ...searchParams, appid: API_KEY })
  const url = `${endpoints["current"]}?${params}`
  return fetch(url).then((response) => response.json())
}
const formatCurrentWeather = (data) => {
  const {
    coord: { lon, lat },
    main: { temp, feels_like, temp_min, temp_max, humidity },
    name,
    dt,
    sys: { country, sunrise, sunset },
    weather,
    wind: { speed },
  } = data

  const { main: description, icon } = weather[0]
  return {
    lat,
    lon,
    temp,
    feels_like,
    temp_min,
    temp_max,
    humidity,
    name,
    dt,
    country,
    sunrise,
    sunset,
    description,
    icon,
    speed,
  }
}
const formatToLocalTime = (
  secs,
  zone,
  format = "cccc dd LLL yyyy' | Local time: 'hh:mm a"
) => DateTime.fromSeconds(secs).setZone(zone).toFormat(format)

const formatForecastWeather = (data) => {
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
      temp: d.temp,
      icon: d.weather[0].icon,
    }
  })
  return { timezone, daily, hourly }
}
const getFormattedWeatherData = async (searchParams) => {
  const formattedCurrentWeather = await getWeatherData(searchParams).then(
    formatCurrentWeather
  )
  const { lat, lon } = formattedCurrentWeather

  const response = await fetch(
    `${endpoints["onecall"]}?lat=${lat}&lon=${lon}&exclude=current,minutely,alerts&units=${searchParams.units}&appid=${API_KEY}`
  )

  const data = await response.json()
  const formattedForecastWeather = formatForecastWeather(data)

  return { ...formattedCurrentWeather, ...formattedForecastWeather }
}

const iconUrlFromCode = (icon) => `http://openweathermap.org/img/wn/${icon}.png`

export default getFormattedWeatherData

export { formatToLocalTime, iconUrlFromCode }
