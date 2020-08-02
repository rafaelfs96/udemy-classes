import React from 'react'
import Faker from 'faker'

export default props => {
  const callback = props.onClick
  const gerarIdade = () => parseInt(Math.random() * (20) + 50)
  const gerarNerd = () => Math.random() > 0.5
  return (
    <div>
      <div>Filho</div>
      <button onClick={ _ => callback(Faker.name.firstName(), gerarIdade(), gerarNerd()) }>
        Fornecer Informacoes
      </button>
    </div>
  )
}