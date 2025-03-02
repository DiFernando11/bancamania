import React from 'react'
import LastMovements from '@/app/components/lastMovements'
import { useGetAccount, useGetMovements } from '@/application/hooks'
import { Box } from '@/ui/atoms'

const Movement = () => {
  const { data } = useGetAccount()
  const { data: movements, isLoading } = useGetMovements({
    accountId: data?.id,
    enabled: Boolean(data?.id),
    limit: 10,
  })

  return (
    <Box className='flex flex-col gap-4'>
      <LastMovements isLoading={isLoading} movements={movements} />
    </Box>
  )
}

export default Movement
