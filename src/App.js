import './App.css';

import React, { useState } from 'react';
import NotesList from './Components/NotesList';
import {nanoid} from 'nanoid';
import './App.css';


const App = () => {

  const [notes, setNotes] = useState([
    {
    id: nanoid(),
    text: 'This is my second note',
    date: '15/02/22'
    },

    {
      id: nanoid(),
      text: 'This is my first note',
      date: '13/02/22'
    },
]);

const addNote = (text) => {
  const date = new Date();
  const newNote = {
    id : nanoid(),
    text: text,
    date: date.toLocaleDateString()

  }

  const newNotes = [...notes, newNote]
  setNotes(newNotes);
}
  return (
    <div className='container'>
      <NotesList notes={notes}  handleAddNote={addNote}/>
    </div>  
    )
}

export default App;
