import { Box } from '@/ui/atoms'

const Skeleton = ({
  className,
  style,
}: {
  className: string
  style?: React.CSSProperties
}) => {
  return (
    <Box
      className={`bg-loading-100 ${className} animate-pulse`}
      style={style}
    />
  )
}

export default Skeleton
