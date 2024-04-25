import axios from "axios"
const API_KEY = "7b58477f8c3ca3de63cb86d1fd846224" // Ensure you set this in your .env file
const BASE_URL = "https://api.openweathermap.org/data/2.5"

export const getWeatherData = async (city) => {
  try {
    const response = await axios.get(`${BASE_URL}/weather`, {
      params: {
        q: city,
        appid: API_KEY,
      },
    })
    return response.data
  } catch (error) {
    console.error("Failed to fetch weather data:", error)
    return null // Handle the error appropriately depending on your application's needs
  }
}

const formatCurrentWeather = (data) => {
    const {
        cord: { lon, lat },
        main:{ temp, feels_like, temp_min, temp_max, humidity },
        name,
        dt,
        sys: { country , sunrise, sunset },
        weather,
        wind: { speed }
    }=data

    return{lat,lon,temp,feels_like,temp_min,temp_max,humidity,name,dt,country,sunrise,sunset,weather, speed}
}

const getForttedWeatherData = (searchParams)=>{
    const formattedCurrentWeather = formatCurrentWeather(searchParams)