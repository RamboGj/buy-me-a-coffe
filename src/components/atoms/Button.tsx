import { ComponentProps, ReactNode } from 'react'
import { tv } from 'tailwind-variants'

interface ButtonProps extends ComponentProps<'button'> {
  isLoading?: boolean
}

interface ButtonLabelProps extends ComponentProps<'span'> {}

interface ButtonIconProps {
  children: ReactNode
}

const button = tv({
  slots: {
    container:
      'w-full flex h-[44px] items-center justify-center gap-3 rounded-xl bg-sky-500 py-[10px] transition-colors duration-300 hover:bg-sky-700 disabled:bg-sky-800',
    label: 'font-medium text-zinc-900',
  },
})

function Button({ isLoading, className, ...rest }: ButtonProps) {
  const { container } = button()

  return (
    <button
      className={container({ className })}
      disabled={isLoading}
      {...rest}
    />
  )
}

function ButtonIcon({ children }: ButtonIconProps) {
  return children
}

function ButtonLabel({ className, ...rest }: ButtonLabelProps) {
  const { label } = button()

  return <span {...rest} className={label({ className })} />
}

Button.Icon = ButtonIcon
Button.Label = ButtonLabel

export { Button }
