import { ComponentProps } from 'react'
import { tv } from 'tailwind-variants'

interface ParagraphProps extends ComponentProps<'p'> {}

const p = tv({
  base: 'text-base font-normal text-zinc-400',
})

export function P({ className, ...rest }: ParagraphProps) {
  return <p className={p({ className })} {...rest} />
}
