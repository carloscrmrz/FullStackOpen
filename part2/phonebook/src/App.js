import { useState, useEffect } from 'react'
import './index.css'
import PhoneBook from './PhoneBook'
import PersonForm from './PersonForm'
import Filter from './Filter'
import Notification from './Notification'
import phoneService from './services/phoneService'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [filter, setFilter] = useState('')
  const [showFilter, setShowFilter] = useState(false)
  const [notificationMessage, setNotificationMessage] = useState('')
  const [notificationClass, setNotificationClass] = useState('')
  const [showNotification, setShowNotification] = useState(false)

  function hook() {
    phoneService
      .getAll()
      .then(contactList => {
	setPersons(contactList)
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
       if ( window.confirm(`Do you want to update the number of ${contactObj.name}?`)) {	    
         phoneService
  	   .update(duplicated.id, contactObj)
	   .then(() => {
	     hook()
	     setNotificationMessage(`Updated ${contactObj.name}`)
	     setNotificationClass('added')
 	     setShowNotification(true)
             setNewName('')
	     setNewPhone('')
	     setTimeout(()=>setShowNotification(false), 4000)
	   })
       }
       return
    }

    phoneService
      .create(contactObj)
      .then(newContact => {
	setPersons(persons.concat(newContact))
	setNotificationMessage(`Added ${newContact.name}`)
	setNotificationClass('added')
	setShowNotification(true)
        setNewName('')
        setNewPhone('')
	setTimeout(()=>setShowNotification(false), 4000)
      })
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

  function deleteContact(id) {
    if ( window.confirm(`Do you want to delete ${persons.find(contact =>
                                                   contact.id === id).name}?`)) {
      phoneService
        .deleteData(id)
        .then(() => hook())
	.catch(error => {
	  setNotificationMessage(`This contact was already deleted from the server`)
	  setNotificationClass('error')
	  setShowNotification(true)
	  setTimeout(()=>setShowNotification(false), 4000)
          hook()
	})
    }
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
      <h1>Phonebook</h1>
      { showNotification &&
	  <Notification type={notificationClass}
	                message={notificationMessage}
      />
      }
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
      <PhoneBook contacts={contactsToShow}
	         deleteContact={deleteContact} />
    </div>
  )
}

export default App
