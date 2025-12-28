import NotesCard from './NotesCard'
import styles from '../styles/NotesContent.module.css'

const NotesContent = ({ notes, handleDelete }) => {
  return (
    <div className={styles['content-container']}>
      {notes.length === 0 ? (
        <p className="text-2xl ">No Notes Available</p>
      ) : (
        notes.map((note, index) => (
          <NotesCard
            key={index}
            id={index}
            title={note.title}
            content={note.content}
            handleDelete={handleDelete}
          />
        ))
      )}
    </div>
  )
}
export default NotesContent
