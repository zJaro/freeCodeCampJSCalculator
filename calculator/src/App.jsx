import { useState } from 'react'
import Display from './Components/Display'
import Key from './Components/Key' 

import './App.css'

function App() {

  const [displayValue, setDisplayValue] = useState("0");

function handlePadClick(keyValue){
  if (displayValue === "Error") {
    if (keyValue === "AC") {
      setDisplayValue("0");
    } else if (/^\d$/.test(keyValue)) {
      setDisplayValue(String(keyValue));
    }
    return;
  }

    if(keyValue === "AC"){
      setDisplayValue("0")
    }
    else if(keyValue==="="){
    try {
      setDisplayValue(eval(displayValue));
    } catch {
      setDisplayValue("Error");
  }
}
    else{
      setDisplayValue(prev => 
    prev === "0" ? String(keyValue) : prev + String(keyValue))
    }

}



  return (
    <>
    <div id="calculator">
      <Display id='display' displayValue={displayValue}></Display>
      <Key onClick={() => handlePadClick("AC")} text="AC" id='clear'></Key>
      <Key onClick={() => handlePadClick("/")} text="/" aditionalClass="work-key" id='divide'></Key>
      <Key onClick={() => handlePadClick("*")}text="*" aditionalClass="work-key" id='multiply'></Key>
      <Key onClick={() => handlePadClick("7")} text="7" id='seven' ></Key>
      <Key onClick={() => handlePadClick("8")} text="8" id='eight'></Key>
      <Key onClick={() => handlePadClick("9")} text="9" id='nine'></Key>
      <Key onClick={() => handlePadClick("-")} text="-" aditionalClass="work-key" id='substract'></Key>
      <Key onClick={() => handlePadClick(4)} text="4" id='four'></Key>
      <Key onClick={() => handlePadClick(5)} text="5" id='five'></Key>
      <Key onClick={() => handlePadClick(6)} text="6" id='six'></Key>
      <Key onClick={() => handlePadClick("+")}text="+" aditionalClass="work-key" id='add'></Key>
      <Key onClick={() => handlePadClick(1)} text="1" id='one'></Key>
      <Key onClick={() => handlePadClick(2)} text="2"id='two'></Key>
      <Key onClick={() => handlePadClick(3)} text="3"id='three'></Key>
      <Key onClick={() => handlePadClick("=")} text="="id='equals'></Key>
      <Key onClick={() => handlePadClick(0)} text="0"id='zero'></Key>
      <Key onClick={() => handlePadClick(".")}text="." id='dot'></Key>

    </div>
    
    </>
  )
}

export default App
