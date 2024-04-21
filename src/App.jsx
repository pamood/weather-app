import React from "react"
import UilReact from "@iconscout/react-unicons/icons/uil-react"
import TopButton from "./components/TopButton"
import Input from "./components/Input"
import ToggleTemp from "./components/ToggleTemp"
import TimeLocation from "./components/TimeLocation"
import Details from "./components/Details"
import Forecast from "./components/Forecast"

function App() {
  return (
    <div className="mx-auto max-w-screen-md py-5 px-32 bg-sky-700 h-fit shadow-xl mt-10 ">
      {/* <TopButton /> */}
      <Input />
      <ToggleTemp />
      <TimeLocation />
      <Details />
      <Forecast />
    </div>
  )
}
export default App
