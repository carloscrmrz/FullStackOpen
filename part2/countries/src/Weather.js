function Weather({ weather, capital }) {
  return (
    <div>
      <h2>Weather in {capital}</h2>
      <p>Temperature: {weather.main.temp} C</p>
      <img src={` http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
	   alt=''
      />
      <p>Wind: {weather.wind.speed}m/s</p>
    </div>
  )
}

export default Weather
