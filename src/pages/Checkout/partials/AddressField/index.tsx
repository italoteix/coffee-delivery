import { forwardRef, InputHTMLAttributes } from 'react'
import { Container, Input } from './styles'

interface AddressFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  optional?: boolean
}

export const AddressField = forwardRef(function AddressField(
  { optional, className, ...props }: AddressFieldProps,
  ref,
) {
  return (
    <Container className={className}>
      <Input
        {...props}
        ref={
          ref as (instance: HTMLInputElement | null) => void | null | undefined
        }
      />
      {optional && <span>Optional</span>}
    </Container>
  )
})
