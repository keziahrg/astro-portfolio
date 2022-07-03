import { PropsWithChildren } from 'react'

interface LinkProps {
  href: string
  ariaLabel: string
  isExternal?: boolean
}

const Link = ({
  children,
  href,
  ariaLabel,
  isExternal,
}: PropsWithChildren<LinkProps>) => {
  return (
    <a
      href={href}
      aria-label={ariaLabel}
      rel={isExternal ? 'noopener noreferrer' : ''}
      target={isExternal ? '_blank' : ''}
    >
      {children}
    </a>
  )
}

export default Link
export type { LinkProps }
