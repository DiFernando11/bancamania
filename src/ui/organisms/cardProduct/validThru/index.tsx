import React from 'react'
import { useI18Text } from '@/application/hooks'
import { Box, Text } from '@/ui/atoms'
import SkeletonLoader from '../../skeletonLoader'
import TextLoading from '../../textLoading'

const ValidThru = ({
  isLoading,
  validThru,
}: {
  isLoading: boolean
  validThru?: string
}) => {
  const t = useI18Text('tarjetas')

  return (
    <SkeletonLoader isLoading={isLoading} classNameSkeleton='w-24 h-5'>
      <Box className='flex gap-2'>
        <Text textType='font_8_fw_bold_fm_rob' className='self-end text-end'>
          {t('valid').toUpperCase()}
        </Text>
        <Text textType='font_16_fw_bold_fm_rob' className='!leading-4'>
          {validThru}
        </Text>
      </Box>
    </SkeletonLoader>
  )
}

export default ValidThru
