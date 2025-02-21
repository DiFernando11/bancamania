import classNames from 'classnames'
import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'
import { useI18Text } from '@/application/hooks'
import { AnimationContainer, Box, Icon, Text } from '@/ui/atoms'
import PointAnimation from './pointAnimation'

const LoadingMaxScreen = ({ isLoading }: { isLoading: boolean }) => {
  const t = useI18Text()

  return (
    <AnimatePresence>
      {isLoading && (
        <AnimationContainer
          className={classNames(
            'fixed inset-0 flex flex-col gap-4 items-center justify-center',
            'bg-gradient-primary',
            'z-[10000]'
          )}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <AnimationContainer
            className='rounded-full animate-[spin_3s_linear_infinite]'
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <Icon name='Logo' className='w-20 h-20' />
          </AnimationContainer>
          <Box className='flex items-center gap-2 text-white'>
            <Text textType='font_16_fw_bold_fm_rob'>{t('loading')}</Text>
            <Box className='flex'>
              <PointAnimation delay={0} />
              <PointAnimation delay={0.2} />
              <PointAnimation delay={0.4} />
            </Box>
          </Box>
        </AnimationContainer>
      )}
    </AnimatePresence>
  )
}

export default LoadingMaxScreen
