import Contact from './Contact'
function PhoneBook({ contacts }) {
  return (
    <div>
    <h2>Contacts</h2>
    {contacts.map(contact =>
      <Contact key={contact.name}
	       contact={contact}
      />
    )}
    </div>
  )
}

export default PhoneBook
