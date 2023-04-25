import React from 'react'
import Header from './Header'
import MainContent from './converter/MainContent'

function ConverterApp() {
  return (
    <div className='mainContainer'>
      <Header title="Converter" />
      <MainContent />
    </div>
  )
}

export default ConverterApp