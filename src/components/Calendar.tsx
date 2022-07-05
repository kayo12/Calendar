import Mes  from './Mes'
import { useState, useEffect, Children } from 'react';
import useCalendar from '../hooks/useCalendar'
export default function Calendar(props) {

    const date = new Date( new Date().getFullYear(),1,0 );
    var cal = useCalendar(date.getMonth())
   
    // const rows = cal.arrDays.map((current) => {
    //    return <td>{current}</td>
    // })
  function creteTable(){
    cal.getMonth()
      const list = cal.currentmonth.arrDays.map((element, index, arr) => {
            for(let countX = 0; countX < arr[index].length; countX++ ){
                     arr[index][countX] 
            }
      })
  }


  return ( 
   <div className="calendar">
      {/* <Mes mes={mes}/> */}
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
        
          
        </tbody>
      </table>
    </div>
  );
}
