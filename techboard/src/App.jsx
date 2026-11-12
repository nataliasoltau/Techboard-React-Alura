import './App.css'
import { FormularioDeEvento } from './componentes/FormularioDeEventos'
import { Tema } from './componentes/Tema'
import { Banner } from './componentes/Banner'
import { CardEvento } from './componentes/CardEvento'
import { useState } from 'react'

function App() {

 const temas = [
  { id: 1, nome: 'front-end' },
  { id: 2, nome: 'back-end' },
  { id: 3, nome: 'devops' },
  { id: 4, nome: 'inteligência artificial' },
  { id: 5, nome: 'data science' },
  { id: 6, nome: 'cloud' }
];

const [eventos, setEventos] = useState([
  {
    capa: 'https://raw.githubusercontent.com/viniciosneves/tecboard-assets/refs/heads/main/imagem_1.png',
      tema: temas[0],
      data: new Date(),
      titulo: 'Mulheres no Front',
      descricao: 'Valorizando e impulsionando a participação feminina no desenvolvimento front-end.'
  }
])

  function adicionarEvento (evento) {
  setEventos([...eventos, evento])
  console.log('Evento adicionado:', evento)
  console.log('Lista de eventos atualizada:', eventos)
}

  return (
    <main>
      <header> 
        <img src="/logo_techboard.png" alt="Logo" />
      </header>
      <Banner />
      <FormularioDeEvento temas={temas} aoSubmeter={adicionarEvento} />
      {temas.map(function (item) {
        return (
          <section key={item.id}>
            <Tema tema={item}  />
            {eventos.map(function (item, index) {
              return <CardEvento evento={item} key={index} />
            })}
          </section>
        )
      }
      )}
    </main>
  )
}

export default App
