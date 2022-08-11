import Moment from "moment";
import { useState, useEffect } from "react";

export default function Days(props) {
  type day = "green" | "gray";
  const [month, setMonth] = useState([]);
  const [date, setDate] = useState(
    Moment().locale("pt").month(props.k).year(props.y)
  );

  useEffect(() => {
    let firstDay = date.clone().startOf("month").startOf("week");
    let endDay = date.clone().endOf("month").endOf("week");
    let Day = firstDay.clone().subtract(1, "day");
    console.log(`Primeiro dia do mes ${firstDay}`);
    console.log(`ultimo dia do mes ${endDay}`);

    let arrayUpdate = [];

    while (Day.isBefore(endDay, "day")) {
      arrayUpdate.push(
        Array(7)
          .fill(0)
          .map(() => Day.add(1, "day").clone())
      );
    }

    setMonth(arrayUpdate);
    setDate(date.year(props.y));

    console.log(date);
  }, [date, props.y]);

  return (
    <div>
      {month.map((week) => (
        <div key={week} className="week">
          {week.map((d) =>

            d.format("DD") + "" + d._d.getMonth() ===
            d.format("DD") + "" + props.k ? (
              <span className="green" key={d._d.getDate() + "" + props.k}>
                {d.format("DD").toString()}
              </span>
            ) : (
              <span className="gray" key={d._d.getDate() + "" + props.k}>
                {d.format("DD").toString()}
              </span>
            )
          )}
        </div>
      ))}
    </div>
  );
}