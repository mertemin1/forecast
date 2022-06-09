import React, { useEffect, useState } from 'react';
import './App.css';
import Card1 from './components/cardToday';
import Card2 from './components/cardNext';
function App() {
  const apikey = "55cf16827f2aff0a48a74fb6184c285c"
  const [input,setInput] = useState("Istanbul")
  const [weathericon,setWeathericon] = useState(
    [
      {
        "dt": 1649797200,
        "main": {
        "temp": 275.9,
        "feels_like": 273.77,
        "temp_min": 275.03,
        "temp_max": 275.9,
        "pressure": 1018,
        "sea_level": 1018,
        "grnd_level": 917,
        "humidity": 49,
        "temp_kf": 0.87
        },
        "weather": [
        {
        "id": 800,
        "main": "Clear",
        "description": "açık",
        "icon": "01n"
        }
        ],
        "clouds": {
        "all": 0
        },
        "wind": {
        "speed": 2.12,
        "deg": 306,
        "gust": 4.89
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
        "pod": "n"
        },
        "dt_txt": "2022-04-12 21:00:00"
        },

        {
          "dt": 1649797200,
          "main": {
          "temp": 275.9,
          "feels_like": 273.77,
          "temp_min": 275.03,
          "temp_max": 275.9,
          "pressure": 1018,
          "sea_level": 1018,
          "grnd_level": 917,
          "humidity": 49,
          "temp_kf": 0.87
          },
          "weather": [
          {
          "id": 800,
          "main": "Clear",
          "description": "açık",
          "icon": "01n"
          }
          ],
          "clouds": {
          "all": 0
          },
          "wind": {
          "speed": 2.12,
          "deg": 306,
          "gust": 4.89
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
          "pod": "n"
          },
          "dt_txt": "2022-04-12 21:00:00"
          },

          {
            "dt": 1649797200,
            "main": {
            "temp": 275.9,
            "feels_like": 273.77,
            "temp_min": 275.03,
            "temp_max": 275.9,
            "pressure": 1018,
            "sea_level": 1018,
            "grnd_level": 917,
            "humidity": 49,
            "temp_kf": 0.87
            },
            "weather": [
            {
            "id": 800,
            "main": "Clear",
            "description": "açık",
            "icon": "01n"
            }
            ],
            "clouds": {
            "all": 0
            },
            "wind": {
            "speed": 2.12,
            "deg": 306,
            "gust": 4.89
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
            "pod": "n"
            },
            "dt_txt": "2022-04-12 21:00:00"
            },

            
    ]
  )
  const [weatherWeek,setWeatherWeek] = useState( [
    {
      "dt": 1649797200,
      "main": {
      "temp": 275.9,
      "feels_like": 273.77,
      "temp_min": 275.03,
      "temp_max": 275.9,
      "pressure": 1018,
      "sea_level": 1018,
      "grnd_level": 917,
      "humidity": 49,
      "temp_kf": 0.87
      },
      "weather": [
      {
      "id": 800,
      "main": "Clear",
      "description": "açık",
      "icon": "01n"
      }
      ],
      "clouds": {
      "all": 0
      },
      "wind": {
      "speed": 2.12,
      "deg": 306,
      "gust": 4.89
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
      "pod": "n"
      },
      "dt_txt": "2022-04-12 21:00:00"
      },
      {
      "dt": 1649808000,
      "main": {
      "temp": 274.88,
      "feels_like": 273.13,
      "temp_min": 272.85,
      "temp_max": 274.88,
      "pressure": 1019,
      "sea_level": 1019,
      "grnd_level": 916,
      "humidity": 54,
      "temp_kf": 2.03
      },
      "weather": [
      {
      "id": 801,
      "main": "Clouds",
      "description": "az bulutlu",
      "icon": "02n"
      }
      ],
      "clouds": {
      "all": 21
      },
      "wind": {
      "speed": 1.67,
      "deg": 312,
      "gust": 2.13
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
      "pod": "n"
      },
      "dt_txt": "2022-04-13 00:00:00"
      },
      {
      "dt": 1649818800,
      "main": {
      "temp": 273.61,
      "feels_like": 273.61,
      "temp_min": 272.46,
      "temp_max": 273.61,
      "pressure": 1020,
      "sea_level": 1020,
      "grnd_level": 917,
      "humidity": 62,
      "temp_kf": 1.15
      },
      "weather": [
      {
      "id": 800,
      "main": "Clear",
      "description": "açık",
      "icon": "01n"
      }
      ],
      "clouds": {
      "all": 3
      },
      "wind": {
      "speed": 1.18,
      "deg": 299,
      "gust": 1.19
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
      "pod": "n"
      },
      "dt_txt": "2022-04-13 03:00:00"
      },
      {
      "dt": 1649829600,
      "main": {
      "temp": 276.02,
      "feels_like": 273.1,
      "temp_min": 276.02,
      "temp_max": 276.02,
      "pressure": 1021,
      "sea_level": 1021,
      "grnd_level": 918,
      "humidity": 48,
      "temp_kf": 0
      },
      "weather": [
      {
      "id": 800,
      "main": "Clear",
      "description": "açık",
      "icon": "01d"
      }
      ],
      "clouds": {
      "all": 4
      },
      "wind": {
      "speed": 3,
      "deg": 313,
      "gust": 4
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
      "pod": "d"
      },
      "dt_txt": "2022-04-13 06:00:00"
      },
      {
      "dt": 1649840400,
      "main": {
      "temp": 279.6,
      "feels_like": 276.91,
      "temp_min": 279.6,
      "temp_max": 279.6,
      "pressure": 1020,
      "sea_level": 1020,
      "grnd_level": 918,
      "humidity": 37,
      "temp_kf": 0
      },
      "weather": [
      {
      "id": 801,
      "main": "Clouds",
      "description": "az bulutlu",
      "icon": "02d"
      }
      ],
      "clouds": {
      "all": 23
      },
      "wind": {
      "speed": 3.79,
      "deg": 306,
      "gust": 5.11
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
      "pod": "d"
      },
      "dt_txt": "2022-04-13 09:00:00"
      },
      {
      "dt": 1649851200,
      "main": {
      "temp": 281.25,
      "feels_like": 278.21,
      "temp_min": 281.25,
      "temp_max": 281.25,
      "pressure": 1019,
      "sea_level": 1019,
      "grnd_level": 917,
      "humidity": 38,
      "temp_kf": 0
      },
      "weather": [
      {
      "id": 803,
      "main": "Clouds",
      "description": "parçalı bulutlu",
      "icon": "04d"
      }
      ],
      "clouds": {
      "all": 61
      },
      "wind": {
      "speed": 5.37,
      "deg": 296,
      "gust": 5.44
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
      "pod": "d"
      },
      "dt_txt": "2022-04-13 12:00:00"
      },
      {
      "dt": 1649862000,
      "main": {
      "temp": 280.79,
      "feels_like": 278,
      "temp_min": 280.79,
      "temp_max": 280.79,
      "pressure": 1019,
      "sea_level": 1019,
      "grnd_level": 917,
      "humidity": 40,
      "temp_kf": 0
      },
      "weather": [
      {
      "id": 804,
      "main": "Clouds",
      "description": "kapalı",
      "icon": "04d"
      }
      ],
      "clouds": {
      "all": 99
      },
      "wind": {
      "speed": 4.51,
      "deg": 315,
      "gust": 5.06
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
      "pod": "d"
      },
      "dt_txt": "2022-04-13 15:00:00"
      },
    ])
  const [weatherData,setWeatherData] = useState(
    {
      "coord": {
      "lon": 33.4167,
      "lat": 40.6667
      },
      "weather": [
      {
      "id": 803,
      "main": "Clouds",
      "description": "parçalı bulutlu",
      "icon": "04d"
      }
      ],
      "base": "stations",
      "main": {
      "temp": 278.44,
      "feels_like": 273.25,
      "temp_min": 278.44,
      "temp_max": 278.44,
      "pressure": 1005,
      "humidity": 78,
      "sea_level": 1005,
      "grnd_level": 861
      },
      "visibility": 10000,
      "wind": {
      "speed": 9.54,
      "deg": 327,
      "gust": 12.04
      },
      "clouds": {
      "all": 83
      },
      "dt": 1649689220,
      "sys": {
      "country": "TR",
      "sunrise": 1649646845,
      "sunset": 1649694021
      },
      "timezone": 10800,
      "id": 749747,
      "name": "Çankırı",
      "cod": 200
      }
  ) 
  const [weekIcon,setWeekIcon] = useState([])
  var counter = 0;
  useEffect(()=>{
    findCity()
  },[])
  function findCity(){
    counter = counter+1
    
    var query = `https://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&lang=tr&appid=${apikey}`
    fetch(query)
    .then(req => {return req.json()})
    .then(request => {
      console.log(request)
      if(request.cod == "404"){
        return 0;
      }
      setWeatherData(request)
    })
    .then(()=>{
      fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${input}&units=metric&lang=tr&appid=${apikey}`)
      .then(req=>{return req.json()})
      .then(i=>{
        setWeatherWeek(i.list.slice(0,7))
      })
    })
    .then(()=>{
      var a = [...weekIcon]
      console.log(a)
      for(let i = 0;i<weatherWeek.length;i++){

        fetch(`http://openweathermap.org/img/wn/${weatherWeek[i].weather[0].icon}@2x.png`)
        .then((res)=>{
          return res.blob()
        })
        .then(res=>{
          a.push(URL.createObjectURL(res))
          console.log(a)
        })
      }
      setWeekIcon(a)
      console.log("fsdf:" ,weekIcon)
    })
    .then(()=>{
      fetch(`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`)
      .then(response=>{
        return response.blob()
      })
      .then((response)=>{
        setWeathericon(URL.createObjectURL(response))
      })
    })
    
  } 

  return (
    <div className="App">
      <div className='input-div'>
        <input className='input-text' type="text" 
        onChange={(e)=>(setInput(e.target.value))}/>
        <button className='input-btn' onClick={findCity}>Ara</button>
      </div>
     <div className='data-container'>
      <Card1 dataObj = {weatherData} dataIcon = {weathericon}/>
        <div className='scroll-box'>
          <div className='scroll-box-wrapper'>
            <div className='scroll-box-container'>
              {weatherWeek.map((i)=>{
                return(
                  <Card2 dataObj={i} key={Math.floor(Math.random()*1000000)}  dataIcon ={weekIcon[weatherWeek.indexOf(i)]}/>
                )
                })}
            </div>
          </div>
        </div>
     </div>
    </div>
  );
}

export default App;
