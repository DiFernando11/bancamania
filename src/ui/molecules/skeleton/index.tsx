import { Box } from '@/ui/atoms'

const Skeleton = ({ className }: { className: string }) => {
  return <Box className={`bg-loading-100 ${className} animate-pulse`} />
}

export default Skeleton
