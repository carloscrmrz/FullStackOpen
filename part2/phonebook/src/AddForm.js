function AddForm({ value, onChange }) {
  return (
   <>
     <input onChange={onChange}
	    value={value}
     />
   </>
  )
}

export default AddForm
