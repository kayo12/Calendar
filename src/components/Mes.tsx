interface MesAno{
    mes:  number | string
    ano?: number
    horario?: number
}
export default function Mes(props: MesAno){

    let month= ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"] 
    return(
        <span className="currentMonth">
                {month[props.mes]}  
        </span>
    )

}