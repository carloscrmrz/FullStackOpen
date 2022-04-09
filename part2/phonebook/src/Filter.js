function Filter({ value, onChange }) {
  return ( 
   <div>
    <p>Filter by name</p>
    <input onChange={onChange}
	   value={value}
    />
   </div>
  )
}

export default Filter
