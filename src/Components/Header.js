import React from 'react'

const Header = ({handleToggleMode}) => {
  return (
    <div className='header'>
        <h1>Keep Notes</h1>
    <button onClick={()=> handleToggleMode(
        (previousDarkMode) => !previousDarkMode
    )}className='save'>Toggle</button>
    </div>
  )
}

export default Header