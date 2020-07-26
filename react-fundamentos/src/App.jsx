import './App.css'
import React from 'react'

import TabelaProdutos from './components/repeticao/TabelaProdutos'
import ListaAlunos from './components/repeticao/ListaAlunos'
import Familia from './components/basicos/Familia'
import FamiliaMembro from './components/basicos/FamiliaMembro'
import Aleatorio from './components/basicos/Aleatorio'
import Fragmento from './components/basicos/Fragmento'
import ComParametro from './components/basicos/ComParametro'
import Primeiro from './components/basicos/Primeiro'

import Card from './components/layout/Card'

export default _ => (
  <div id='App' className='App'>
    <h1>Fundamentos React</h1>

    <div className='Cards'>
      <Card titulo='#07 - Desafio Repeticao' color='#3a9ad9'>
        <TabelaProdutos />
      </Card>

      <Card titulo='#06 - Repeticao' color='#ff4c65'>
        <ListaAlunos />
      </Card>

      <Card titulo='#05 - Componente com Filhos' color='#00c8f8'>
        <Familia sobrenome='Ferreira'>
          <FamiliaMembro nome='Pedro' />
          <FamiliaMembro nome='Ana' />
          <FamiliaMembro nome='Rafael' />
        </Familia>
      </Card>

      <Card titulo='#04 - Aleatorio' color='#fa6900'>
        <Aleatorio min={1} max={60} />
      </Card>

      <Card titulo='#03 - Fragmento' color='#e94c6f'>
        <Fragmento/>
      </Card>

      <Card titulo='#02 - Com Parametro' color='#e8b71a'>
        <ComParametro titulo='segundo componente' subtitulo='muito legal'/>
      </Card>

      <Card titulo='#01 - Primeiro Exercicio' color='#588c73'>
        <Primeiro></Primeiro>
      </Card>
    </div>

  </div>
)