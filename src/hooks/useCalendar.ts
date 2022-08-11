import { useEffect, useState } from 'react'


export default function useCalendar(month) {

    const [currentmonth, setCurrenMonth] = useState({
        fisrtDayWeek: 0,
        mes: 0,
        arrDays: new Array()
    })



    return {
             currentmonth,
            
            }
}