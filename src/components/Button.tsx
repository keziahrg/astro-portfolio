import { PropsWithChildren } from 'react'

interface ButtonProps {
  type: string
  ariaLabel: string
  onClick?: (e) => void
  disabled?: boolean
}

const Button = ({
  children,
  ariaLabel,
  type,
  onClick,
  disabled = false,
}: PropsWithChildren<ButtonProps>) => {
  return (
    <button
      type={type}
      aria-label={ariaLabel}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default Button
export type { ButtonProps }
