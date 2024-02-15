'use client'

import { BlurSphere } from '@/components/atoms/BlurSphere'
import { Button } from '@/components/atoms/Button'
import { CardContainer } from '@/components/atoms/CardContainer'
import { H1 } from '@/components/atoms/H1'
import { P } from '@/components/atoms/P'
import { useRouter } from 'next/navigation'

export default function Home() {
  const { push } = useRouter()

  return (
    <div className="flex h-full min-h-screen w-full items-center justify-center">
      <CardContainer className="relative max-w-[480px]">
        <div className="w-full">
          <div className="flex flex-col items-center">
            <H1>Buy me a coffe</H1>
            <P>Connect before buying a coffe</P>
          </div>

          <Button
            onClick={() => {
              push('/coffe')
            }}
            className="mt-32"
          >
            <Button.Label>Connect</Button.Label>
          </Button>
        </div>

        <BlurSphere className="-left-[50px] -top-[50px]" />
        <BlurSphere className="-bottom-[50px] -right-[50px]" />
      </CardContainer>
    </div>
  )
}
