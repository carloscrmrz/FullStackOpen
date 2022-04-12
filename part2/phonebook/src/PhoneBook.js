import Contact from './Contact'
function PhoneBook({ contacts, deleteContact }) {
  return (
    <div>
    <h2>Contacts</h2>
    {contacts.map(contact =>
      <Contact key={contact.id}
	       contact={contact}
	       deleteContact={() => deleteContact(contact.id)}
      />
    )}
    </div>
  )
}

export default PhoneBook
