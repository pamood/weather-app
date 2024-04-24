const API_KEY = "7b58477f8c3ca3de63cb86d1fd846224"
const BASE_URL = "https://api.openweathermap.org/data/2.5"

const getWeatherData = (infotype, searchParams) => {
  const url = new URL(BASE_URL + "/" + "weather")
  url.search = new URLSearchParams({ ...searchParams, appid: API_KEY })

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

const getFormattedWeatherData = async (searchParams) => {
  const formattedCurrentWeather = await getWeatherData(
    "weather",
    searchParams
  ).then(formatCurrentWeather)
  return formattedCurrentWeather
}

export default getFormattedWeatherData
