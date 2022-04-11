import { useState, useEffect } from 'react'
import axios from 'axios'
import Weather from './Weather'

function Display({ country }) {
  const api_key = process.env.REACT_APP_WEATHER_API_KEY
  const [weather, setWeather] = useState([])
  const [weatherReady, setWeatherReady] = useState(false)
  
  function hook() {
    axios
      .get(`http://api.openweathermap.org/data/2.5/weather?q=${country.capital[0]}&appid=${api_key}&units=metric`)
      .then(response => {
	setWeather(response.data)
	setWeatherReady(true)
      })
  }
  useEffect(hook, [])
  return (
    <div>
      <h2>{country.name.common}</h2>
      <p>Capital: {country.capital[0]}</p>
      <p>Area:    {country.area}</p>
      <h2>Languages:</h2>
	<ul>
	  {Object.keys(country.languages)
		 .map(lang => 
		    <li key={lang}>
		      {country.languages[lang]}
		    </li>
	  )}
	</ul>
      <img src={country.flags['png']}
	   style={{width:150 +'px', height: 100 + 'px'}}
	   alt={`${country.name.common} flag`}
      />
      {weatherReady &&
      <Weather weather={weather}
	       capital={country.capital[0]}
      />
      }
    </div>
  )
}

export default Display
