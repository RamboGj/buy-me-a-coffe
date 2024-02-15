'use client'

import { CheckCircle } from '@phosphor-icons/react'
import { Toaster as ToasterComponent } from 'react-hot-toast'
import colors from 'tailwindcss/colors'

export function Toaster() {
  return (
    <ToasterComponent
      position="top-right"
      toastOptions={{
        success: {
          style: {
            background: colors.zinc[900],
            color: colors.zinc[200],
            borderRadius: '12px',
            minWidth: 300,
            display: 'flex',
            gap: 10,
          },
          icon: <CheckCircle color={colors.sky[500]} size={24} weight="bold" />,
        },

        error: {
          style: {
            background: colors.zinc[900],
            color: colors.zinc[200],
            borderRadius: '12px',
            minWidth: 300,
            display: 'flex',
            gap: 10,
          },
          icon: <CheckCircle color={colors.red[500]} size={24} weight="bold" />,
        },
      }}
    />
  )
}
