interface TextareaProps {
  name: string
  label: string
  required?: boolean
  placeholder?: string
}

const Textarea = ({ name, label, required, placeholder }: TextareaProps) => (
  <>
    <label htmlFor={name}>{label}</label>
    <textarea
      id={name}
      name={name}
      required={required}
      placeholder={placeholder}
    ></textarea>
  </>
)

export default Textarea
export type { TextareaProps }
