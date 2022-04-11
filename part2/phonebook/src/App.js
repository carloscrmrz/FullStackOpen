import { useState, useEffect } from 'react'
import axios from 'axios'
import PhoneBook from './PhoneBook'
import PersonForm from './PersonForm'
import Filter from './Filter'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [filter, setFilter] = useState('')
  const [showFilter, setShowFilter] = useState(false)

  function hook() {
    console.log('getting info from server...')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
	setPersons(response.data)
        console.log('got it!')
      })
  }
  useEffect(hook, [])

  function addNewContact(e) {
    e.preventDefault();
    const contactObj = {
      name: newName,
      phone: newPhone,
    }
    const duplicated = 
	    persons.find(contact =>
		     contact.name === contactObj.name);
    if ( duplicated ) {
      alert(`${newName} is already on the phonebook.`)
      return
    }
    setPersons(persons.concat(contactObj))
    setNewName('')
    setNewPhone('')
  }

  function handleNameChange(e) {
    setNewName(e.target.value)
  }

  function handlePhoneChange(e) {
    setNewPhone(e.target.value)
  }

  function handleFilter(e) {
    setFilter(e.target.value)
    if ( e.target.value.length === 0 )
      setShowFilter(false)
    setShowFilter(true)
  }

  const contactsToShow = !showFilter
    ? persons
    : persons.filter(contact => 
	             contact.name
	                    .toLowerCase()
			    .indexOf(filter
			             .toLowerCase()) !== -1)
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter value={filter}
	      onChange={handleFilter}
      />
      <h3>Add New Contact</h3>
      <PersonForm newName={newName}
	          newPhone={newPhone}
	          handleNameChange={handleNameChange}
	          handlePhoneChange={handlePhoneChange}
	          addContact={addNewContact}
      />
      <PhoneBook contacts={contactsToShow} />
    </div>
  )
}

export default App
