'use client'

import { BlurSphere } from '@/components/atoms/BlurSphere'
import { CardContainer } from '@/components/atoms/CardContainer'
import { SkeletonLine } from '@/components/atoms/Skeleton'

export function CoffePageSkeleton() {
  return (
    <div className="flex h-full min-h-screen w-full items-center justify-center">
      <CardContainer className="relative max-w-[670px] ">
        <div className="w-full">
          <div className="flex flex-col items-center">
            <SkeletonLine width={320} height={48} />
            <span className="flex items-center gap-2 text-xl font-medium">
              Balance <SkeletonLine width={80} height={30} />
            </span>
            <SkeletonLine className="mt-8" width={320} height={44} />
          </div>

          <div className="mt-16 w-full pb-32">
            <h2 className="text-xl font-medium">Coffes bought</h2>

            <ul>
              <SkeletonLine
                width={342}
                height={32}
                count={4}
                className="mt-5"
              />
            </ul>
          </div>
        </div>

        <BlurSphere className="-right-[62px] -top-[62px] h-[132px] w-[132px] blur-[132px]" />
        <BlurSphere className="-bottom-[62px] -left-[62px] h-[132px] w-[132px] blur-[132px]" />
      </CardContainer>
    </div>
  )
}
// }
