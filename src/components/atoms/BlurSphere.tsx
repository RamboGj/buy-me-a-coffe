import { ComponentProps } from 'react'
import { tv } from 'tailwind-variants'

interface BlurSphereProps extends ComponentProps<'div'> {}

const sphere = tv({
  base: 'absolute z-20 rounded-full bg-sky-500 blur-[100px] w-[100px] h-[100px]',
})

export function BlurSphere({ className, ...rest }: BlurSphereProps) {
  const blurSphere = sphere({ className })

  return <div className={blurSphere} {...rest} />
}
