import './formulario-de-evento.estilo.css'
import { TituloFormulario } from "../TituloFormulario"
import { CampoFormulario } from "../CampoFormulario"
import { LabelFormulario } from "../LabelFormulario"
import { CampoDeEntrada } from "../CampoDeEntrada"
import { ListaSuspensa } from "../../ListaSuspensa"
import { Botao } from "../../Botao"

export function FormularioDeEvento () {
  return (
    <form className="form-evento">
      <TituloFormulario>
        Preencha para criar um evento:
        </TituloFormulario>
        <div className="campos">
      <CampoFormulario>
        <LabelFormulario htmlFor="nomeEvento">Qual o nome do evento?</LabelFormulario>
        <CampoDeEntrada type="text" id="nomeEvento'" placeholder="Summer dev hits" />
      </CampoFormulario>
      <CampoFormulario>
        <LabelFormulario htmlFor="dataEvento">Data do evento</LabelFormulario>
        <CampoDeEntrada type="date" id="dataEvento" name="dataEvento" />
      </CampoFormulario>
      <CampoFormulario>
        <LabelFormulario htmlFor="temaEvento">Tema do evento</LabelFormulario>
        <ListaSuspensa tema1="Front-end" tema2="Back-end" tema3="Full-stack" tema4="Mobile" />
      </CampoFormulario>
      </div>
      <div className="acoes">
     <Botao>Criar evento</Botao>
     </div>
    </form>
  )
}