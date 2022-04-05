import { useState } from 'react'
import Button from './Button'
import Statistics from './Statistics'


const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const votes = {good, neutral, bad}

  function goodHandler() {
	  setGood(good + 1);
  }
  
  function neutralHandler() {
	  setNeutral(neutral + 1);
  }

  function badHandler() {
	  setBad(bad + 1);
  }

  return (
    <div>
      <h1>Give feedback:</h1>
      <Button text='good'
	      onClick={goodHandler}
      />
      <Button text='neutral'
	      onClick={neutralHandler}
      />
      <Button text='bad'
	      onClick={badHandler}
      />
      <h1>Statistics</h1>
      <Statistics votes={votes} />
    </div>
  )
}

export default App
