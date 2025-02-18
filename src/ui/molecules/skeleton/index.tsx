import { Box } from '@/ui/atoms'

const Skeleton = ({ className }: { className: string }) => {
  return <Box className={`bg-gray-200 ${className} animate-pulse`} />
}

export default Skeleton
