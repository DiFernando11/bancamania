'use client'
import classNames from 'classnames'
import React, { useEffect, useState } from 'react'
import { MenuOption } from '@/shared'
import { useModal } from '@/shared/hooks'
import { AnimationContainer, Box, Icon, Text } from '@/ui/atoms'
import MobileMenuContextual from '../../menuContextual/mobile'

const ShowMobileMenuContext = ({
  scrollRef,
  options,
}: {
  scrollRef: React.RefObject<HTMLDivElement>
  options: MenuOption[]
}) => {
  const { openModal } = useModal()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        setScrolled(scrollRef.current.scrollTop > 0)
      }
    }

    const scrollElement = scrollRef.current
    if (scrollElement) {
      scrollElement.addEventListener('scroll', handleScroll)
    }

    return () => {
      if (scrollElement) {
        scrollElement.removeEventListener('scroll', handleScroll)
      }
    }
  }, [scrollRef])

  return (
    <Box className='absolute top-2 right-0 z-10 mx-4 sm:mx-8'>
      <AnimationContainer
        onClick={() => openModal(<MobileMenuContextual options={options} />)}
        className={classNames('px-2 flex lg:hidden cursor-pointer', {
          'bg-black rounded-lg': scrolled,
        })}
        initial={{ opacity: 0, rotate: 90 }}
        animate={{
          opacity: 1,
          rotate: scrolled ? 180 : 0,
        }}
        transition={{
          damping: 14,
          stiffness: 120,
          type: 'spring',
        }}
      >
        <Icon name='Ellipsis' className='w-6 h-6 sm:w-7 sm:h-7' />
      </AnimationContainer>
    </Box>
  )
}

export default ShowMobileMenuContext
