import './lista-suspensa.estilo.css'

export function ListaSuspensa (props) {
    return (
    <select id="temas" name="temas" className="lista-suspensa-form">
    <option value="tema1">{props.tema1}</option>
    <option value="tema2">{props.tema2}</option>
    <option value="tema3">{props.tema3}</option>
    <option value="tema4">{props.tema4}</option>
  </select>
    )
}