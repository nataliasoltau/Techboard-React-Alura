import './formulario-de-evento.estilo.css'
import { TituloFormulario } from "../TituloFormulario"
import { CampoFormulario } from "../CampoFormulario"
import { LabelFormulario } from "../LabelFormulario"
import { CampoDeEntrada } from "../CampoDeEntrada"
import { ListaSuspensa } from "../ListaSuspensa"
import { Botao } from "../../Botao"

export function FormularioDeEvento ({temas, aoSubmeter}) {
   function aoformsubmetido (formData) {
     console.log('Formulário submetido', formData)
     const evento = {
      capa: formData.get('capa'),
      tema: temas.find(function (item) {
         return item.id == formData.get('tema') 
      }),
      data: new Date(formData.get('dataEvento')),
      titulo: formData.get('nomeEvento'),
      descricao: formData.get('descricaoEvento')
      }
      aoSubmeter(evento);
   }


  return (
    <form className="form-evento" action={aoformsubmetido}>
      <TituloFormulario>
        Preencha para criar um evento:
        </TituloFormulario>
        <div className="campos">
      <CampoFormulario>
        <LabelFormulario htmlFor="nomeEvento">Qual o nome do evento?</LabelFormulario>
        <CampoDeEntrada type="text" id="nomeEvento" name="nomeEvento" placeholder="Summer dev hits" />
      </CampoFormulario>
      <CampoFormulario>
        <LabelFormulario htmlFor="capa">Capa do evento</LabelFormulario>
        <CampoDeEntrada type="text" id="capa" name="capa" placeholder="https://example.com/imagem.jpg" />
      </CampoFormulario>
      <CampoFormulario>
        <LabelFormulario htmlFor="dataEvento">Data do evento</LabelFormulario>
        <CampoDeEntrada type="date" id="dataEvento" name="dataEvento" />
      </CampoFormulario>
       <CampoFormulario>
        <LabelFormulario htmlFor="descricaoEvento">Descrição do evento</LabelFormulario>
        <CampoDeEntrada type="text" id="descricaoEvento" name="descricaoEvento" placeholder="Descrição do evento" />
      </CampoFormulario>
      <CampoFormulario>
        <LabelFormulario htmlFor="temaEvento">Tema do evento</LabelFormulario>
        <ListaSuspensa id="tema" name="tema" itens={temas} />
      </CampoFormulario>
      </div>
      <div className="acoes">
     <Botao>Criar evento</Botao>
     </div>
    </form>
  )
}