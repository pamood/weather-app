export function formatBg(weather, units) {
  if (!weather) return "bg-sky-700"
  const threshold = units === "metric" ? 20 : 60
  if (weather.temp <= threshold) return "bg-sky-600"
  return "bg-orange-600"
}
