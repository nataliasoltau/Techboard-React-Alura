import './label.estilo.css'

export function LabelFormulario ({children, htmlFor}) {
  return (
    <label htmlFor={htmlFor} className="label-form">
      {children}
    </label>
  )
}