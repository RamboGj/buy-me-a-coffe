import Skeleton, { SkeletonProps } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import colors from 'tailwindcss/colors'

interface SkeletonLineProps extends SkeletonProps {}

export function SkeletonLine({ ...rest }: SkeletonLineProps) {
  return (
    <Skeleton
      borderRadius="4"
      direction="ltr"
      enableAnimation
      baseColor={colors.zinc[950]}
      highlightColor={colors.zinc[900]}
      {...rest}
    />
  )
}
