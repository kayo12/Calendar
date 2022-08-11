import Days from "./Days";

interface MesAno {
  mes?: number | string ;
  ano?: number ;
  horario?: number;
}
export default function Mes(props?: MesAno) {
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
              <Days k={index} m={current} y={props.ano}/>
          </div>
        ))}
    </div>
  );
}
