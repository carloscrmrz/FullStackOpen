import { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './Filter' 
import Country from './Country'

function App() {
  const [countries, setCountries] = useState([])
  const [filterCountry, setFilterCountry] = useState('')

  function hook() {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
	setCountries(response.data)
      })
  }
  useEffect(hook, [])
  
  function handleSearchChange(e) {
    setFilterCountry(e.target.value)
  }

  const countriesToShow = 
        countries.filter(country =>
	          country.name.common
	                 .toLowerCase()
	                 .indexOf(filterCountry
				  .toLowerCase()) !== -1)

  return (
   <div>
     <Filter value={filterCountry}
  	     onChange={handleSearchChange}
     />
     <Country countryList={countriesToShow} />
  </div>
  );
}

export default App;
