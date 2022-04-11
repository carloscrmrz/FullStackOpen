import Display from './Display'
import CountryList from './CountryList'

function Country({ countryList }) {
  let toShow;
  if ( countryList.length > 10 )  {
    toShow = <h2>More than 10 countries, maybe be a little more specific?</h2>
  } else if ( countryList.length > 1 ) {
    toShow = <ul>
	       {countryList.map(country =>
		  <li key={country.altSpellings[0]}>
		    <CountryList country={country} />
		  </li>)}
	     </ul>
  } else if ( countryList.length === 1 ) { 
    toShow = <Display country={countryList[0]} />
  } else {
    toShow = <p>I don't think there are any countries with that name...</p>
  }
  return (
   <div>{toShow}</div>
  )
}

export default Country
