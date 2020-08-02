import './Input.css'
import React, { useState } from 'react'

export default props => {
  const [valor, setValor] = useState('inicial')

  function onChangeHandler(evt) {
    setValor(evt.target.value)
  }

  return (
    <div className='Input'>
      <h2>{ valor }</h2>
      <div style={{
        display: 'flex',
        flexDirection: 'column'
      }}>
        {/* Controlled Component */}
        <input value={ valor } onChange={onChangeHandler} />
        <input value={ valor } readOnly />

        {/* Uncontrolled Component */}
        <input value={undefined} />
      </div>
      
    </div>
  )
}