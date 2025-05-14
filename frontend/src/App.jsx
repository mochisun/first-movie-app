import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <>
      <Text display = "hello"/>
      <Text display = "whas good"/>
    </>
  )
}

function Text({display}){
  return(
    <div>{display}</div>
  )
}

export default App
