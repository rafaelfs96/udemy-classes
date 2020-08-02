import React, { useState } from 'react'
import IndiretaFilho from './IndiretaFilho'

export default props => {
  const [nome, setNome] = useState('Rafael')
  const [idade, setIdade] = useState(24)
  const [nerd, setNerd] = useState(false)

  function informacoes(nome, idade, nerd) {
    setNome(nome)
    setIdade(idade)
    setNerd(nerd)    
  }
  
  return (
    <div>
      <span>{ nome } </span>
      <span><strong>{ idade }</strong> </span>
      <span>{ nerd ? 'Verdadeiro' : 'Falso' }</span>
      <IndiretaFilho onClick={informacoes}></IndiretaFilho>
    </div>
  )
}