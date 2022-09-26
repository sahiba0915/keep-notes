import React from 'react';
import { MdDeleteForever } from 'react-icons/md';

const Note = () => {
  return (
    <div className='note'>
        <span>Hello! This is our first note.</span>
        <div className='note-footer'>
            <span>26/09/2022</span>
            <MdDeleteForever className='delete-icon' size='1.3rem'/>       
            </div>
    </div>
  )
}

export default Note