import { ComponentProps } from 'react'
import { tv } from 'tailwind-variants'

interface H1Props extends ComponentProps<'h1'> {}

const h1 = tv({
  base: 'text-[2rem] font-semibold uppercase',
})

export function H1({ className, ...rest }: H1Props) {
  return <h1 className={h1({ className })} {...rest} />
}
