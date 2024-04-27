import { useContext } from "react";
import { WeatherContext } from "./context/WeatherContext";
import TopBar from "./components/TopBar";
import ToggleTemp from "./components/ToggleTemp";
import TimeLocation from "./components/TimeLocation";
import Details from "./components/Details";
import LocationInput from "./components/LocationInput";
import TopButton from "./components/TopButton";
import Toast from "./components/Toast";
import Spinner from "./components/Spinner";
import ForecastWrapper from "./components/ForecastWrapper";
import { formatBg } from "./utils/utils";

function App() {
  const { units, weather, isLoading } = useContext(WeatherContext);

  return (
    <div className={formatBg(weather, units)}>
      <TopBar />
      <div className="mx-auto max-w-screen-md py-5 px-16 h-fit ">
        <TopButton />
        <LocationInput />
        <ToggleTemp />
        {isLoading ? (
          <Spinner />
        ) : (
          weather && (
            <>
              <TimeLocation />
              <Details />
              <ForecastWrapper weather={weather} />
            </>
          )
        )}
      </div>
      <Toast />
    </div>
  );
}
export default App;
