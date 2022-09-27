import React, { useState } from 'react'

const AddNote = ({handleAddNote}) => {

    const [noteText, setNoteText] = useState('');
    const characterLimit = 200;

    const handleChange = (event) => {
       if(characterLimit - event.target.value.length >= 0){
        setNoteText(event.target.value);
       }else{
        alert("Limit Exceeded!")
       }
    }

    const handleSave = () => {
        if(noteText.trim().length > 0){
       handleAddNote(noteText);
       setNoteText('');
        }else{
            alert("Note can't be empty!.")
        }
    }

  return (
    <div className='note new'>
        <textarea
            rows='8'
            cols= '10'
            placeholder='Write your note...'
            value={noteText}
            onChange={handleChange}>
        </textarea>
    <div className='note-footer'>
        <small>{characterLimit - noteText.length} Remaining</small>
        <button className='save' onClick={handleSave}>Save</button>
    </div>
    </div>
  )
}

export default AddNote