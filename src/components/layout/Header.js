import React from 'react';
import { Link } from 'react-router-dom'

function Header(){
  return  (
    <header style={headStyle}>
      <h1>ToDoList</h1>
      <Link style={headStyle2} to="/">Home</Link> | <Link style={headStyle2} to="/About">About</Link>
    </header>
  )
}

const headStyle={
  background: '#333',
  color: 'white',
  textAlign: 'center',
  padding: '10px'
}
const headStyle2={
  color: 'white',
  textAlign: 'center',
  padding: '10px'
}

export default Header;