import Display from './Display.js'

function Statistics({ votes }) {
  const total = votes.good + votes.neutral + votes.bad;
  const score = votes.good + votes.neutral*0 + votes.bad*-1;

  if ( !total ) {
    return (
      <div><p>No feedback given</p></div>
    )
  }

  return (
    <table>
     <tbody>
      <Display text='good'
               counter={votes.good}
      />
      <Display text='neutral'
               counter={votes.neutral}
      />
      <Display text='bad'
               counter={votes.bad}
      />
      <Display text='average'
	       counter={score/total}
      />
      <Display text='positive'
	       counter={votes.good/total * 100}
      />
     </tbody>
    </table>
  )
}
export default Statistics
