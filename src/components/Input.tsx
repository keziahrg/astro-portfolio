interface InputProps {
  name: string
  label: string
  type: string
  required?: boolean
  placeholder?: string
}

const Input = ({ name, label, type, required, placeholder }: InputProps) => (
  <>
    <label htmlFor={name}>{label}</label>
    <input
      type={type}
      id={name}
      name={name}
      required={required}
      placeholder={placeholder}
    />
  </>
)

export default Input
export type { InputProps }
