import Mes from "./Mes";
import { useEffect, useState, useSyncExternalStore } from "react";

export default function Calendar(props) {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    OnChangeYear();
  }, [year]);

  function OnChangeYear() {
    try {
      let ye = (document.getElementById("year") as HTMLInputElement).value;
      if (ye !== "") {
        setYear(Number(ye));
      }
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className="calendar">
      <div className="inputYear">
        <input type="text" id="year" className="year" placeholder="Digite apenas o ano desejado Ex: 2025"/>
        <button
          className="btnSearch"
          onClick={OnChangeYear}

        >
          Buscar
        </button>
      </div>
      <div className="displayyear">
        <label htmlFor="year"> {year}</label>
      </div>
      <Mes anos={year} />
    </div>
  );
}
