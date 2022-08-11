import Mes from "./Mes";
import { useEffect, useState, useSyncExternalStore } from "react";

export default function Calendar(props) {

  const [year, setYear] = useState("2022");

  useEffect(() => {
    OnChangeYear();
  }, [year]);

  function OnChangeYear() {
    let ye = (document.getElementById("year") as HTMLInputElement).value;
    console.log(ye);
    return setYear(ye);
  }

  return (
    <div className="calendar">
      
      <div className="inputYear">
        <input type="text" id="year" className="year" />
        <button className="btnSearch"onClick={OnChangeYear} placeholder="Ex: 2025">Buscar</button>
      </div>
      <div className="displayyear">
        <label htmlFor="year"> {year}</label>
      </div>
      <Mes ano={Number(year)} />
    </div>
  );


  
}
