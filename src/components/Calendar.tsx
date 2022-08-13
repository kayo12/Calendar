import Mes from "./Mes";
import { useEffect, useState, useSyncExternalStore } from "react";

export default function Calendar(props) {
  const date = new Date().getFullYear();
  const [msg, setMsg] = useState("");
  const [year, setYear] = useState(date);

  useEffect(() => {
    OnChangeYear();
  }, [year,msg]);

  function OnChangeYear() {
  
    try {
      let ye = (document.getElementById("year") as HTMLInputElement).value;

      if (Number(ye) < 0) {
        setMsg("Por favor, insira um valor valido Ex: 2025");
        setYear(this.date);
      }else{
        setMsg("")
      }
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
        <input
          type="number"
          id="year"
          className="year"
          placeholder="Digite apenas o ano desejado Ex: 2025"
        />
        <button className="btnSearch" onClick={OnChangeYear}>
          Buscar
        </button>
      </div>
      <div className="displayyear">
        {msg == "" ? (
          <label htmlFor="year" id="year-label"> {year}</label>
        ) : (
          <label htmlFor="msg" id="msg-label">{msg}</label>
        )}
      </div>
      <Mes anos={year} />
    </div>
  );
}
