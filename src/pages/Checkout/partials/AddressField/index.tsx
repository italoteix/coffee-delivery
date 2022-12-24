import { InputHTMLAttributes } from 'react'
import { Container, Input } from './styles'

interface AddressFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  optional?: boolean
}

export function AddressField({
  optional,
  className,
  ...props
}: AddressFieldProps) {
  return (
    <Container className={className}>
      <Input {...props} />
      {optional && <span>Optional</span>}
    </Container>
  )
}
