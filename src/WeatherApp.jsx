import React from 'react'
import SearchBox from "./SearchBox"
import InfoBox from './InfoBox'
import { useState } from 'react'

const WeatherApp = () => {
    let [weatherInfo, setWeatherInfo] = useState({
        city : "Delhi",
        temp : 21,
        minTemp : 20,
        maxTemp : 21,
        humidity : 81, 
        weather : "haze"
    });

    let updateInfo = (newInfo) =>{
        setWeatherInfo(newInfo);
    }
  return (
    <div>
      <h3 style={{paddingTop :"20px" , paddingBottom : "20px"}}>Made by Kamal</h3>
      <SearchBox updateInfo = {updateInfo}/>
      <InfoBox info= {weatherInfo}/>
    </div>
  )
}

export default WeatherApp
