import Mes  from './Mes'
import { useState, useEffect, Children } from 'react';
import useCalendar from '../hooks/useCalendar'
export default function Calendar(props) {

    var cal = useCalendar()
    // const rows = cal.arrDays.map((current) => {
    //    return <td>{current}</td>
    // })

  return ( 
   <div className="calendar">
      <Mes mes={mes}/>
      <table className="table-calender">
        <thead>
          <tr>
            <th>Dom</th>
            <th>Seg</th>
            <th>Ter</th>
            <th>Qua</th>
            <th>Qui</th>
            <th>Sex</th>
            <th>Sab</th>
          </tr>
        </thead>
        <tbody>
          {/* Criar um loop no dia da semana aqui */}
        
          <tr>
            {rows}
          </tr>
          
        </tbody>
      </table>
    </div>
  );
}
