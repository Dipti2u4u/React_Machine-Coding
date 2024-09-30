import React from 'react'
import Dropdown from './Components/Dropdown'

const App = () => {
  const options = ['Fruites','Vegetables']
  return (
    <>
    <h2>Simple Dropdown</h2>
    <Dropdown options={options}/>
    </>
  )
}

export default App