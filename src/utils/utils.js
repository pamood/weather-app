// change bg color accoding to the temp
export function formatBg(weather, units) {
  if (!weather) return "bg-sky-700"
  const threshold = units === "metric" ? 20 : 68
  if (weather.temp <= threshold) return "bg-sky-600"
  return "bg-orange-600"
}
