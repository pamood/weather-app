import ToggleTemp from "./components/ToggleTemp"
import TimeLocation from "./components/TimeLocation"
import Details from "./components/Details"
import Forecast from "./components/Forecast"
import Input from "./components/Input"
function App() {
  return (
    <div className="mx-auto max-w-screen-md py-5 px-32 bg-sky-700 h-fit shadow-xl mt-10 ">
      {/* <TopButton /> */}
      <Input />
      <ToggleTemp />
      <TimeLocation />
      <Details />
      <Forecast title="hourly forecast" />
      <Forecast title="daily forecast" />
    </div>
  )
}
export default App
