import { useState, useEffect } from 'react'
import axios from 'axios'
import Note from './Note'

const App = () => {
  const [ notes, setNotes ] = useState([])
  const [ newNote, setNewNote ] = useState('a new note...')
  const [ showAll, setShowAll ] = useState(true)

  const hook = () => {
    axios
      .get('http://localhost:3001/notes')
      .then(response => {
        setNotes(response.data)
      })
  }

  useEffect(hook, [])

  function addNote(e) {
    e.preventDefault();
    const noteObj = {
      content:   newNote,
      date:      new Date().toISOString(),
      important: Math.random() < 0.5,
      id:        notes.length + 1,
    }
    setNotes(notes.concat(noteObj))
    setNewNote('')
  }

  function handleNoteChange(e) {
    setNewNote(e.target.value)
  }

  const notesToShow = showAll 
    ? notes
    : notes.filter(note => note.important === true)

  return (
    <div>
      <h1>Notes</h1>
      <div>
	<button onClick={() => setShowAll(!showAll)}>
	  show {showAll ? 'important' : 'all'}
	</button>
      </div>
      <ul>
        {notesToShow.map(note => 
	  <Note key={note.id}
		note={note} 
	  />
	)}
      </ul>
      <form onSubmit={addNote}>
	<input value={newNote}
	       onChange={handleNoteChange}/>
	<button type='submit'>save</button>
      </form>
    </div>
  )
}

export default App
