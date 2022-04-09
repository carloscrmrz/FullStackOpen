import AddForm from './AddForm'

function PersonForm({ newName,
                      newPhone,
     		      handleNameChange,
                      handlePhoneChange,
                      addContact         }) {
  return (
   <div>
   <form onSubmit={addContact} >
    Name:
    <AddForm value={newName}
	     onChange={handleNameChange}
    />
    <br/>
    Phone:
    <AddForm value={newPhone}
	     onChange={handlePhoneChange}
    />
    <br/>
    <button type='submit'>add new contact</button>
   </form>
   </div>
  )
}

export default PersonForm
