'use client'
import React, { ReactNode } from 'react'
import { useI18Text } from '@/application/hooks'
import { isValidUUIDv4 } from '@/shared/utils'
import { Box } from '@/ui/atoms'
import { Alert } from '@/ui/molecules'

const ValidUUIDShow = ({
  id,
  children,
}: {
  id: string
  children: ReactNode
}) => {
  const tCommon = useI18Text()
  if (!isValidUUIDv4(id))
    return (
      <Box className='m-4'>
        <Alert type='error'>{tCommon('invalidId')}</Alert>
      </Box>
    )

  return children
}

export default ValidUUIDShow
