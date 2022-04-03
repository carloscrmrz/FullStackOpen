import Part from './Part'

const Content = (props) => {
  const parts = props.parts;
  return (
    <div>
      {parts.map((part) => <Part {...part} />)}
    </div>
  )
}

export default Content
