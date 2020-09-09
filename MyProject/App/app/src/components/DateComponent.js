import React from 'react'
import calendarLogo from '../images/icon-calendar.svg'
import DateReturn from '../functions/DateReturn'




export default function DateComponent() {
 

    const date = DateReturn(); //Use date from URL
        
    var DateForDisplay = date.split('-'); //["2020", "07", "28"]

    var day = DateForDisplay[2] // 28
    var month = DateForDisplay[1] // 07
    var year = DateForDisplay[0] // 2020

    var validDateFormat = day +'-'+ month +'-'+ year //28-07-2020


    
    return (
        <>
        <div className="date-wrap">
            <img className="icon" src={calendarLogo} alt="Calendar"/>
            <time path = "">{validDateFormat}</time>
        </div>  
        </>
    )
}




