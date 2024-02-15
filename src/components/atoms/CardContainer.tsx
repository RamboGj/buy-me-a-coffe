import { ComponentProps } from 'react'
import { tv } from 'tailwind-variants'

interface CardContainerProps extends ComponentProps<'div'> {}

const card = tv({
  base: 'flex w-full rounded-[20px] bg-zinc-900 px-12 py-8 drop-shadow-lg',
})

export function CardContainer({ className, ...rest }: CardContainerProps) {
  return <div className={card({ className })} {...rest} />
}
