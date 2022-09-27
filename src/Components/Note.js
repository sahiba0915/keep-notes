import React from 'react';
import { MdDeleteForever } from 'react-icons/md';

const Note = ({id, text, date, handleDeleteNote}) => {
  return (
    <div className='note'>
        <span>{text}</span>
        <div className='note-footer'>
            <span>{date}</span>
            <MdDeleteForever className='delete-icon' size='1.3rem' onClick={() => handleDeleteNote(id)}/>       
            </div>
    </div>
  )
}

export default Note