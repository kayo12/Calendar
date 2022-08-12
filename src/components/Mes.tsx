import Days from "./Days";

interface Mesanoss {
  mes?: number | string;
  anos?: number;
  horario?: number;
}
export default function Mes(props?: Mesanoss) {

  const dayWeek = ["D", "S", "T", "Q", "Q", "S", "S"];

  let month = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];
  return (
    <div className="container">
      {month.map((current, index) => (
        <div className="Months">
          <span className="currentMonth" key={current}>
            {current}
          </span>
          <div className="dayWeek">
            {dayWeek.map((dWeek) => (
              <span key={dWeek} className="dayW">
                {dWeek}
              </span>
            ))}
          </div>
          <Days k={index} m={current} y={props.anos} />
        </div>
      ))}
    </div>
  );
}
