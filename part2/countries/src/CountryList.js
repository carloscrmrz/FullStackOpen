import { useState } from 'react'
import Display from './Display'

function CountryList({ country }) {
  const [showDetails, setShowDetails] = useState(false)

  return (
    <>
      {country.name.common} &nbsp; &nbsp;
      {showDetails && <Display country={country} />}
      <button onClick={() => setShowDetails(!showDetails)}>
        {showDetails ? 'Less' : 'More...'}
      </ button>
    </>
  )
}

export default CountryList
