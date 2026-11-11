import './App.css'
import { FormularioDeEvento } from './componentes/FormularioDeEventos'
import { Tema } from './componentes/Tema'
import { Banner } from './componentes/Banner'
import { CardEvento } from './componentes/CardEvento'

const temas = [
  { id: 1, nome: 'front-end' },
  { id: 2, nome: 'back-end' },
  { id: 3, nome: 'devops' },
  { id: 4, nome: 'inteligência artificial' },
  { id: 5, nome: 'data science' },
  { id: 6, nome: 'cloud' }
];

const eventos = [
    {
      capa: 'https://raw.githubusercontent.com/viniciosneves/tecboard-assets/refs/heads/main/imagem_1.png',
      tema: temas[0],
      data: new Date(),
      titulo: 'Mulheres no Front',
      descricao: 'Valorizando e impulsionando a participação feminina no desenvolvimento front-end.'
    }
  ]

function App() {
  return (
    <main>
      <header> 
        <img src="/logo_techboard.png" alt="Logo" />
      </header>
      <Banner />
      <FormularioDeEvento />
      {temas.map(function (item) {
        return (
          <section key={item.id}>
            <Tema tema={item}  />
            <CardEvento evento={eventos[0]}/>
          </section>
        )
      }
      )}
    </main>
  )
}

export default App
