import React from 'react'
import Card from './components/Card'
import './App.css'

const App = () => {
  return (
    <div className='container'>
      <Card Username = "Ankani balaji" role = "Web Developer"/>
      <Card Username = "Hari" role = "Rag Developer"/>
      <Card Username = "Balaji" role = "AI Engineer"/>
    </div>
  )
}

export default App