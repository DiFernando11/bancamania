import { Box } from '@/ui/atoms'

const Skeleton = ({
  width = 'w-full',
  height = 'h-4',
  rounded = 'rounded-md',
}) => {
  return (
    <Box
      className={`bg-gray-200 ${width} ${height} ${rounded} animate-pulse`}
    />
  )
}

export default Skeleton
