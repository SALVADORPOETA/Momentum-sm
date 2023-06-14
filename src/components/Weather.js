import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { WeatherContainer, Temp, City } from './WeatherStyles';

const url = `https://api.openweathermap.org/data/2.5/weather?q=veracruz&units=imperial&appid=${process.env.REACT_APP_API_KEY}`

const Weather = () => {
  const [data, setData] = useState(null)

  useEffect(() => {
    axios.get(url).then((response) => {
      setData(response.data)
    }).catch((error) => {
      console.log(error)
    })
  },[])

  console.log(data)

  if(!data) return null;

  return (
    <WeatherContainer>
      <Temp>{data.main.temp.toFixed(0)}°F</Temp>
      <City>Veracruz, Ver</City>
    </WeatherContainer>
  )
}

export default Weather