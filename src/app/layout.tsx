import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { twMerge } from 'tailwind-merge'
import { Toaster } from '@/components/atoms/Toaster'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={twMerge(poppins.className, 'bg-zinc-950 text-zinc-200')}>
        {children}
        <Toaster />
      </body>
    </html>
  )
}
