import './botao.estilo.css'

export function Botao (props) {
  return (
    <button className="botao-form">
      {props.children}
    </button>
  )
}