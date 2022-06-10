import React, { useState ,useEffect} from 'react';
import "./cardNext.css"
function Card2(props){
    console.log(props.dataIcon)
    const [day,setDay] = useState()
    const [time,setTime] = useState()
    
    useEffect(()=>{
        var text = props.dataObj.dt_txt
        setDay(text.slice(0,10))
        setTime(text.slice(10,20))
        console.log(day,"sladk",time)
    },[])
    return(
        <div className='main-2'>
        <div className='icon-div-2'>
            <img src = {props.dataIcon} />
        </div>
        <div className='degree-div-2'>
            {props.dataObj.main.temp}°C/{props.dataObj.main.feels_like}°C
        </div>
        <div className='city-div-2'>
            <p className='city-p-2'>{day}</p>
            <p className='city-p-2'>{time}</p>
        </div>
        <div className='weather-div-2'>
        {props.dataObj.weather[0].description}
        </div>
        
            
           
            
        
    </div>
    )
}
export default Card2;