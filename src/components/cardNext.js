import React, { useState } from 'react';
import "./cardNext.css"
function Card2(props){
    console.log(props.dataIcon)
    return(
        <div className='main-2'>
        <div className='icon-div-2'>
            <img src = {props.dataIcon} />
        </div>
        <div className='degree-div-2'>
            {props.dataObj.main.temp}°C/{props.dataObj.main.feels_like}°C
        </div>
        <div className='city-div-2'>
            <p className='city-p-2'>{props.dataObj.dt_txt}</p>
        </div>
        <div className='weather-div-2'>
        {props.dataObj.weather[0].description}
        </div>
        
            
            <div className='other-div-2'>
                    <div className='other-line-2'>
                        <p>rüzgar hızı:</p>{props.dataObj.wind.speed}m/s
                    </div>
            
                    <div className='other-line-2'>
                        <p>derecesi:</p>{props.dataObj.wind.deg}
                    </div>
                    <div className='other-line-2'>
                        <p>nem: </p>{props.dataObj.main.humidity}%
                    </div>
                    <div className='other-line-2'>
                        <p>basınç: </p>{props.dataObj.main.pressure}hPa
                    </div>
                    
            </div>
            
        
    </div>
    )
}
export default Card2;