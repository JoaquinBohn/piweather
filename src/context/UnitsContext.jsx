import { createContext, useState } from "react";
import Swal from "sweetalert2";

export const UnitsContext = createContext();

const UnitsContextProvider = ({ children }) => {
  const [units, setUnits] = useState("imperial");

  const changeUnits = (system) => {
    setUnits(system);
    Swal.fire("Unit system change to " + system, "", "success");
  };

  const getUnits = () => {
    return units;
  };

  const getTempUnit = () => {
    const unit = units === "imperial" ? "ºF" : units === "metric" ? "ºC" : "ºK";
    return unit;
  };

  const getWindUnit = () => {
    const unit =
      units === "imperial" ? "MpH" : units === "metric" ? "Km/h" : "m/s";
    return unit;
  };

  const MilesPerHourToKmPerHour = (wind) => {
    return wind * 1.60934;
  };

  let data = {
    units: units,
    changeUnits,
    getUnits,
    getTempUnit,
    getWindUnit,
    MilesPerHourToKmPerHour,
  };

  return <UnitsContext.Provider value={data}>{children}</UnitsContext.Provider>;
};

export default UnitsContextProvider;
