import React, { useState } from 'react';
import "./cardToday.css"
function Card1(props){
   
    return(
        <div className='main'>
        <div className='icon-div'>
            <img src = {props.dataIcon} />
        </div>
        <div className='degree-div'>
            {props.dataObj.main.temp}°C/{props.dataObj.main.feels_like}°C
        </div>
        <div className='city-div'>
            <p className='city-p'>{props.dataObj.name}</p>
        </div>
        <div className='weather-div'>
        {props.dataObj.weather[0].description}
        </div>
        
            
            <div className='other-div-container'>
                    <div className='other-div '>
                        <div className='other-line'>
                            <p>rüzgar hızı:</p>{props.dataObj.wind.speed}m/s
                        </div>
                
                        <div className='other-line'>
                            <p>derecesi:</p>{props.dataObj.wind.deg}
                        </div>
                    </div>
                    <div className='other-div '>
                        <div className='other-line'>
                            <p>nem: </p>{props.dataObj.main.humidity}%
                        </div>
                        <div className='other-line'>
                            <p>basınç: </p>{props.dataObj.main.pressure}hPa
                        </div>
                    </div>
                    
            </div>
            
        
    </div>
    )
}
export default Card1;