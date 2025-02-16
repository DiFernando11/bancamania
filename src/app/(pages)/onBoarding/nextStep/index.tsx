import classNames from 'classnames'
import React from 'react'
import { Box, Icon, LottiePlayer } from '@/ui/atoms'
import { NextStepProps } from './types'

const NextStep = ({ next, toHome = false }: NextStepProps) => {
  return (
    <Box
      className={classNames(
        'transition-all flex justify-center cursor-pointer',
        'rounded-lg w-full h-20 from-transparent items-center p-3 shadow-lg',
        'bg-gradient-to-b via-[#2e7d3265] to-[#61ad5e81]',
        'lg:absolute lg:right-0 lg:bg-gradient-to-r',
        'lg:h-full',
        'lg:w-40'
      )}
      onClick={next}
    >
      <Box className={classNames('mt-3', 'sm:mt-0 sm:ml-3 lg:ml-5 relative')}>
        <LottiePlayer
          name='clickHere'
          className={classNames(
            'absolute -top-20 -left-10 w-20 h-20 rotate-180',
            'lg:-left-28 lg:-top-32 lg:w-40 lg:h-40'
          )}
        />
        {toHome ? (
          <Box
            className={classNames(
              'flex  justify-center items-center w-12 h-12',
              'border rounded-full shadow-2xl',
              'lg:w-24 lg:h-24'
            )}
          >
            <Icon name='Home' className='w-8 h-8 lg:w-16 lg:h-16' />
          </Box>
        ) : (
          <Icon
            name={'Arrown'}
            className={classNames('w-8 h-8 -rotate-90', 'lg:w-20 lg:h-20')}
          />
        )}
      </Box>
    </Box>
  )
}

export default NextStep
