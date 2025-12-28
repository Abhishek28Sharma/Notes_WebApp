import styles from '../styles/NotesCard.module.css'
import { MdCancel } from 'react-icons/md'
import { FaArrowLeft } from 'react-icons/fa'
import { useState } from 'react'

const NotesCard = ({ id, title, content, handleDelete }) => {
  const [isClicked, setIsClicked] = useState(false)

  function openCard() {
    setIsClicked(true)
  }

  function closeCard() {
    setIsClicked(false)
  }

  return (
    <>
      {isClicked ? (
        <div className={styles['large-screen']}>
          <button className={styles['back-button']} onClick={closeCard}>
            <FaArrowLeft />
            Back
          </button>

          <h1 className={styles['larger-screen-heading']}>{title}</h1>
          <p className={styles['large-screen-content']}>{content}</p>
        </div>
      ) : (
        <div className={styles['card-container']}>
          {' '}
          {/* // onClick={openCard}  is disable*/}
          <h3 className={styles['card-heading']}>{title}</h3>
          <p className={styles['card-content']}>{content}</p>
          <button
            className={styles['delete-button']}
            onClick={(e) => {
              e.stopPropagation() // 🔥 FIX
              handleDelete(id)
            }}
          >
            <MdCancel />
          </button>
        </div>
      )}
    </>
  )
}

export default NotesCard
