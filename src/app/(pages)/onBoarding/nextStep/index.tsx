import classNames from 'classnames'
import React from 'react'
import { AnimationContainer, Icon } from '@/ui/atoms'

const NextStep = ({ next }: { next: () => void }) => {
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
        'sm:rounded-l-lg sm:h-full sm:w-20',
        'lg:w-40'
      )}
      onClick={next}
    >
      <AnimationContainer
        className={classNames('mt-5', 'sm:mt-0 sm:ml-5')}
        animate={{ x: [0, 5, 0] }}
        transition={{ duration: 1, ease: 'easeInOut', repeat: Infinity }}
      >
        <Icon
          name={'Arrown'}
          className={classNames(
            'w-8 h-8 -rotate-90',
            'sm:w-12 sm:h-12',
            'lg:w-20 lg:h-20'
          )}
        />
      </AnimationContainer>
    </AnimationContainer>
  )
}

export default NextStep
