import './App.css'
import React from 'react'

import Card from './components/layout/Card'

import MegaSena from './components/mega/Mega'

import Contador from './components/contador/Contador'

import Input from './components/formulario/Input'

import IndiretaPai from './components/comunicacao/IndiretaPai'
import DiretaPai from './components/comunicacao/DiretaPai'

import UsuarioInfo from './components/condicional/UsuarioInfo'
import ParOuImpar from './components/condicional/ParOuImpar'

import TabelaProdutos from './components/repeticao/TabelaProdutos'
import ListaAlunos from './components/repeticao/ListaAlunos'

import Familia from './components/basicos/Familia'
import FamiliaMembro from './components/basicos/FamiliaMembro'
import Aleatorio from './components/basicos/Aleatorio'
import Fragmento from './components/basicos/Fragmento'
import ComParametro from './components/basicos/ComParametro'
import Primeiro from './components/basicos/Primeiro'

export default _ => (
  <div id='App' className='App'>
    <h1>Fundamentos React</h1>

    <div className='Cards'>
      <Card titulo='#13 - Desafio Mega-Sena' color='#b9006e'>
        <MegaSena />
      </Card>

      <Card titulo='#12 - Contador' color='#424242'>
        <Contador numeroInicial={10}></Contador>
      </Card>

      <Card titulo='#11 - Componente Controlado / Nao Controlado (Input)' color='#e45f56'>
        <Input />
      </Card>

      <Card titulo='#10 - Comunicacao Indireta' color='#8bad39'>
        <IndiretaPai></IndiretaPai>
      </Card>

      <Card titulo='#09 - Comunicacao Direta' color='#59353c'>
        <DiretaPai />
      </Card>

      <Card titulo='#08 - Renderizacao Condicional' color='#982395'>
        <ParOuImpar numero={21} />
        <UsuarioInfo usuario={{ nome: 'rafael' }} />
        <UsuarioInfo />
      </Card>

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
        <Fragmento />
      </Card>

      <Card titulo='#02 - Com Parametro' color='#e8b71a'>
        <ComParametro titulo='segundo componente' subtitulo='muito legal' />
      </Card>

      <Card titulo='#01 - Primeiro Exercicio' color='#588c73'>
        <Primeiro />
      </Card>
    </div>
  </div>
)