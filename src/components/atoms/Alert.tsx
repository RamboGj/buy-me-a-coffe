import { Toast } from 'react-hot-toast'
import { tv } from 'tailwind-variants'

const alert = tv({})

interface AlertProps {
  status: 'success' | 'failed'
  t: Toast
}

export function Alert({ status, t }: AlertProps) {
  return (
    <div
      className={`rounded-xl bg-zinc-900 p-3 drop-shadow-xl ${t.visible ? 'animate-enter' : ''}`}
    >
      <span className="text-sm text-zinc-200">Message here testing.</span>
    </div>
  )
}
