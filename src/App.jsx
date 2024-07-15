import { useState } from 'react'
import './App.css'
import logo from "/src/assets/logo.svg"
import TranslateBoxes from "./components/TranslateBoxes.jsx"

function App() {

  return (
    <div className="container">
      <img src={logo} />
      <TranslateBoxes />
    </div>
  )
}

export default App
