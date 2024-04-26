import { useState } from "react";

function ToggleTemp({ setUnits }) {
  const [isCelsius, setIsCelsius] = useState(true);

  const toggleTemperature = () => {
    const newUnit = isCelsius ? 'imperial' : 'metric';
    setIsCelsius(!isCelsius);
    setUnits(newUnit);
  };

  return (
    <div
      className="flex flex-col justify-center items-center my-6 text-white cursor-pointer transition ease-out hover:scale-110"
      onClick={toggleTemperature}
    >
      {isCelsius ? "Celsius (°C)" : "Fahrenheit (°F)"}
    </div>
  );
}

export default ToggleTemp;