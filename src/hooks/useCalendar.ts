import { useEffect, useState } from 'react'

export default function useCalendar() {

    const [currentmonth, setCurrenMonth] = useState({
        fisrtDayWeek: 0,
        mes: 0,
        arrDays: []
    })
  useEffect(() => {  

            let daysMonth = new Date(new Date().getFullYear(), 1, 0);
            let i = 1

            for (i = 1; i <= daysMonth.getDate(); i++) {

               currentmonth.arrDays.push(i)               
            }
            currentmonth.fisrtDayWeek = daysMonth.getDay()
        })

    return currentmonth
}