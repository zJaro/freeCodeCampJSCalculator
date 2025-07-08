import { useState } from 'react'
import Display from './Components/Display'
import Key from './Components/Key' 

import './App.css'

function App() {

  return (
    <>
    <div id="calculator">
      <Display id='display'></Display>
      <Key id='ac'></Key>
      <Key id='divide'></Key>
      <Key id='multiply'></Key>
      <Key id='seven'></Key>
      <Key id='eight'></Key>
      <Key id='nine'></Key>
      <Key id='minus'></Key>
      <Key id='four'></Key>
      <Key id='five'></Key>
      <Key id='six'></Key>
      <Key id='plus'></Key>
      <Key id='one'></Key>
      <Key id='two'></Key>
      <Key id='three'></Key>
      <Key id='equals'></Key>
      <Key id='zero'></Key>
      <Key id='dot'></Key>

    </div>
    
    </>
  )
}

export default App
