import React, { useState } from 'react';
import NotesList from './Components/NotesList';
import {nanoid} from 'nanoid';
import './App.css';
import SearchNote from './Components/SearchNote';
import Header from './Components/Header';


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

const [searchNote, setSearchNote] = useState('');

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

const[darkMode, setDarkMode] = useState(false);

const deleteNote = (id) => {
  const newNotes = notes.filter((note) => note.id!== id);
  setNotes(newNotes);
}
  return (
    <div className={`${darkMode && 'dark-mode'}`}>
      <div className='container'>
      <Header handleToggleMode={setDarkMode}/>
      <SearchNote handleSearchNote = {setSearchNote} />
      <NotesList notes={notes.filter((note) => note.text.toLowerCase().includes(searchNote))}  handleAddNote={addNote} handleDeleteNote={deleteNote}/>
    </div> 
    </div>
    )
}

export default App;
