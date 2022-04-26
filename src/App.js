import React, { useState, useRef } from 'react'
import "./App.css"
import useRandomJoke from './useRandomJoke'

function App() {

  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')

  const joke = useRandomJoke(firstName, lastName)

  const generateJoke = e => {
    e.preventDefault()
    setFirstName(firstNameRef.current.value)
    // console.log(firstName, lastName)
    // console.log(joke)
    setLastName(lastNameRef.current.value)
    // console.log(firstName, lastName)
    // console.log(joke)
  }

  return (
    <div className="app">
      <center>
        <h1>The Joke Generator</h1>
        <form>
          <h3>{joke}</h3>
          <input
            placeholder='First Name'
            ref={firstNameRef}
          />
          <input
            placeholder='Last Name'
            ref={lastNameRef}
          />
          <button onClick={generateJoke}>
            Generate Joke
          </button>
        </form>
      </center>
    </div>
  )
}

export default App