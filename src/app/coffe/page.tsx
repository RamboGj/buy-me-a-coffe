'use client'

import { useEffect, useState } from 'react'

import colors from 'tailwindcss/colors'
import { CircleNotch } from '@phosphor-icons/react'
import toast from 'react-hot-toast'

import { BlurSphere } from '@/components/atoms/BlurSphere'
import { Button } from '@/components/atoms/Button'
import { CardContainer } from '@/components/atoms/CardContainer'
import { CoffePageSkeleton } from '@/components/molecules/CoffePageSkeleton'

export default function CoffePage() {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isLoadingPage, setIsLoadingPage] = useState<boolean>(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoadingPage(false)
    }, 3000)
  }, [])

  function handleSetLoading() {
    setIsLoading(true)

    setTimeout(() => {
      setIsLoading(false)
      toast.error('Hello Error message')
    }, 1500)
  }

  const coffes = [
    {
      id: 0,
      buyer: '0x56Ff268B29F17b88246f872Ee5cCDDCb538bdE85',
      bougthAt: '10/02/2024',
    },
    {
      id: 1,
      buyer: '0x56Ff268B29F17b88246f872Ee5cCDDCb538bdE85',
      bougthAt: '10/02/2024',
    },
    {
      id: 2,
      buyer: '0x56Ff268B29F17b88246f872Ee5cCDDCb538bdE85',
      bougthAt: '10/02/2024',
    },
    {
      id: 3,
      buyer: '0x56Ff268B29F17b88246f872Ee5cCDDCb538bdE85',
      bougthAt: '10/02/2024',
    },
  ]

  if (isLoadingPage) return <CoffePageSkeleton />

  return (
    <div className="flex h-full min-h-screen w-full items-center justify-center">
      <CardContainer className="relative max-w-[670px] ">
        <div className="w-full">
          <div className="flex flex-col items-center">
            <h1 className="text-[2rem] font-semibold uppercase">
              Buy me a coffe
            </h1>
            <span className="text-xl font-medium">
              Balance{' '}
              <strong className="font-medium text-sky-500">0.22 ETH</strong>
            </span>
            <Button
              className="mt-8 w-[320px]"
              isLoading={isLoading}
              onClick={handleSetLoading}
            >
              <Button.Label>
                {isLoading ? 'Buying...' : 'Buy coffe'}
              </Button.Label>
              {isLoading ? (
                <Button.Icon>
                  <CircleNotch
                    size={24}
                    className="animate-spin"
                    color={colors.zinc[900]}
                  />
                </Button.Icon>
              ) : null}
            </Button>
          </div>

          <div className="mt-16 w-full pb-32">
            <h2 className="text-xl font-medium">Coffes bought</h2>

            <ul className="mt-1 flex max-w-sm flex-col items-stretch gap-y-5 divide-y-2 divide-zinc-500">
              {coffes.map(({ bougthAt, buyer, id }) => {
                const formattedBuyer = buyer
                  .slice(0, 4)
                  .concat('...')
                  .concat(buyer.slice(buyer.length - 3, buyer.length))

                return (
                  <li key={id}>
                    <div className="flex items-center gap-20 pt-4 text-sm">
                      <span>{formattedBuyer}</span>
                      <span className="text-zinc-400">{bougthAt}</span>
                      <span className="text-sky-500">0.1 ETH</span>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>

        <BlurSphere className="-right-[62px] -top-[62px] h-[132px] w-[132px] blur-[132px]" />
        <BlurSphere className="-bottom-[62px] -left-[62px] h-[132px] w-[132px] blur-[132px]" />
      </CardContainer>
    </div>
  )
}
