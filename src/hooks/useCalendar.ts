import { useEffect, useState } from 'react'

export default function useCalendar(month) {

    const [currentmonth, setCurrenMonth] = useState({
        fisrtDayWeek: 0,
        mes: 0,
        arrDays: new Array()
    })

    const getMonth = () => {
        let daysMonth = new Date(new Date().getFullYear(), month, 0);       
        let arrayCurrent = new Array()
        for(let i = 1;i <= daysMonth.getDate(); i++){
            arrayCurrent.push(i)
            if(i % 7 == 0 && i != 1){
                currentmonth.arrDays.push(arrayCurrent)
                arrayCurrent = new Array()
            }
        }
        
        currentmonth.fisrtDayWeek = daysMonth.getDay();
    }
    return {
             currentmonth,
             getMonth
            }
}