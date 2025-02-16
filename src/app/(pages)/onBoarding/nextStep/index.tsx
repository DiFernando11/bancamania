import classNames from 'classnames'
import { motion } from 'framer-motion'
import React from 'react'
import { Box, Icon } from '@/ui/atoms'
import { NextStepProps } from './types'

const NextStep = ({ next, toHome = false }: NextStepProps) => {
  return (
    <Box
      className={classNames(
        'flex justify-center cursor-pointer',
        'rounded-lg w-full h-20 from-transparent items-center p-3 shadow-lg',
        'bg-gradient-to-b via-[#2e7d3265] to-[#61ad5e81]',
        'lg:absolute lg:right-0 lg:bg-gradient-to-r',
        'lg:h-full',
        'lg:w-40'
      )}
      onClick={next}
    >
      <motion.div
        animate={{
          x: [0, 5, 0],
        }}
        transition={{
          duration: 1,
          ease: 'easeInOut',
          repeat: Infinity,
        }}
        className={classNames('mt-3', 'lg:mt-0 lg:ml-5 relative')}
      >
        {toHome ? (
          <Box
            className={classNames(
              'flex justify-center items-center w-12 h-12',
              'border rounded-full shadow-2xl',
              'lg:w-24 lg:h-24'
            )}
          >
            <Icon name='Home' className='w-8 h-8 lg:w-16 lg:h-16' />
          </Box>
        ) : (
          <Icon
            name='Arrown'
            className={classNames('w-8 h-8 -rotate-90', 'lg:w-20 lg:h-20')}
          />
        )}
      </motion.div>
    </Box>
  )
}

export default NextStep
