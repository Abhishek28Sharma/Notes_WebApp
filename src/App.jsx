import styles from './styles/App.module.css'
import NotesForm from './components/NotesForm'
import NotesContent from './components/NotesContent'
import { useState, useEffect } from 'react'
const App = () => {
  const [notes, setNotes] = useState(() => {
    const savedNotes = localStorage.getItem('notes')
    return savedNotes ? JSON.parse(savedNotes) : []
  })
  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes))
  }, [notes])

  function formData(title, content) {
    console.log(title)
    console.log(content)
    setNotes([...notes, { title, content }])
  }
  const handleDelete = (idx) => {
    setNotes(notes.filter((_, i) => i !== idx))
  }
  return (
    <div className={styles['app-container']}>
      <NotesForm formData={formData} />
      <NotesContent notes={notes} handleDelete={handleDelete} />
    </div>
  )
}

export default App
