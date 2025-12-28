import { useState } from 'react'
import styles from '../styles/NotesForm.module.css'
const NotesForm = ({ formData }) => {
  const [Heading, setHeading] = useState('')
  const [Notes, setNotes] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (Heading.trim() === '' || Notes.trim() === '') return
    formData(Heading, Notes)
    setHeading('')
    setNotes('')
  }

  return (
    <div className={styles['form-container']}>
      <form className="p-5 h-screen " onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Heading..."
          className={styles['input-heading']}
          value={Heading}
          onChange={(e) => setHeading(e.target.value)}
        />
        <textarea
          placeholder="Write your notes here..."
          className={styles['textarea-notes']}
          value={Notes}
          onChange={(e) => setNotes(e.target.value)}
        ></textarea>
        <button className={styles['save-button']} type="submit">
          Save
        </button>
      </form>
    </div>
  )
}

export default NotesForm
