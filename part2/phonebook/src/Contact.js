function Contact({ contact, deleteContact }) {
  return (
    <div>
      <p>{ contact.name } { contact.phone }</p>
      <button onClick={deleteContact}>Delete</button>
    </div>
  )
}

export default Contact
