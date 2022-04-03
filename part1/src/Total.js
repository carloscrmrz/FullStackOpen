const Total = (props) => {
  const parts = props.parts;
  let sum = parts[0].exercises + parts[1].exercises + parts[2].exercises;
  return (
    <div>
      <p>Number of exercises: {sum}</p>
    </div>
  )
}

export default Total
