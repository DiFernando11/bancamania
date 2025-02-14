import classNames from 'classnames'
import React from 'react'
import { AnimationContainer, Box, Icon, Text } from '@/ui/atoms'
import { NextStepProps } from './types'

const NextStep = ({ next, toHome = false }: NextStepProps) => {
  return (
    <AnimationContainer
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={classNames(
        'transition-all flex justify-center cursor-pointer',
        'rounded-lg w-full h-20 from-transparent items-center p-3 shadow-lg',
        'bg-gradient-to-b via-[#2e7d3265] to-[#61ad5e81]',
        'sm:absolute sm:right-0 sm:bg-gradient-to-r',
        'sm:h-full sm:w-28',
        'lg:w-40'
      )}
      onClick={next}
    >
      <AnimationContainer
        className={classNames('mt-3', 'sm:mt-0 sm:ml-3 lg:ml-5')}
        animate={{ x: [0, 5, 0] }}
        transition={{ duration: 1, ease: 'easeInOut', repeat: Infinity }}
      >
        {toHome ? (
          <Box
            className={classNames(
              'flex  justify-center items-center w-12 h-12',
              'border rounded-full shadow-2xl',
              'sm:w-16 sm:h-16',
              'lg:w-24 lg:h-24'
            )}
          >
            <Icon
              name='Home'
              className='w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16'
            />
          </Box>
        ) : (
          <Icon
            name={'Arrown'}
            className={classNames(
              'w-8 h-8 -rotate-90',
              'sm:w-12 sm:h-12',
              'lg:w-20 lg:h-20'
            )}
          />
        )}
      </AnimationContainer>
    </AnimationContainer>
  )
}

export default NextStep
