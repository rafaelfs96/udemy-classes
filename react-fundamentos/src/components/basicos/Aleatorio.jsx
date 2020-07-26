import React from 'react'

export default (props) => {
  const {min, max} = props
  const aleatorio = parseInt(Math.random() * (max - min)) + min
  return (
    <div>
      <h2>Valor Aleatorio</h2>
      <p><strong>Min: </strong>{ min }</p>
      <p><strong>Max: </strong>{ max }</p>

      <p><strong>Valor: </strong>{ aleatorio }</p>
    </div>
  )
}
  