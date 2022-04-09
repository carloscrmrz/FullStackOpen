const Total = (props) => {
  const parts = props.parts;
  let sum = parts.map(part => part.exercises).reduce((a,b)=> a+b)
  return (
    <div>
      <p><strong>Number of exercises: {sum}</strong></p>
    </div>
  )
}

export default Total
