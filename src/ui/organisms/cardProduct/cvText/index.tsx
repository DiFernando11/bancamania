import React from 'react'
import { useI18Text } from '@/application/hooks'
import { Box, Text } from '@/ui/atoms'
import SkeletonLoader from '../../skeletonLoader'
import TextLoading from '../../textLoading'

const CvText = ({ isLoading, cv }: { isLoading: boolean; cv?: string }) => {
  const t = useI18Text('tarjetas')

  return (
    <SkeletonLoader isLoading={isLoading} classNameSkeleton='w-24 h-5'>
      <Box className='flex gap-2 items-center'>
        <Box>
          <Text textType='font_8_fw_bold_fm_rob' className=''>
            {t('code')}
          </Text>
          <Text textType='font_8_fw_bold_fm_rob' className='self-end text-end'>
            {t('security')}
          </Text>
        </Box>
        <Text
          textType='font_20_fw_bold_fm_rob'
          className='self-end text-center'
        >
          {cv}
        </Text>
      </Box>
    </SkeletonLoader>
  )
}

export default CvText
