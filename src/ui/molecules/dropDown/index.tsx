'use client'
import classNames from 'classnames'
import { AnimatePresence } from 'framer-motion'
import React, { useState } from 'react'
import { AnimationContainer, Box, Icon, Text } from '@/ui/atoms'
import { IconArrown, IconMinus, IconPlus } from './constants'
import {
  DropdownContent,
  DropdownItemProps,
  RecursiveDropdownProps,
} from './types'

const backgroundColors = ['#111111', '#222222', '#333333', '#444444']

const DropDownItem: React.FC<DropdownItemProps> = ({
  item,
  level,
  isRoot,
  levelDifferent = false,
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const backgroundColor =
    backgroundColors[Math.min(level, backgroundColors.length - 1)]

  const childrenOpen = isOpen ? IconMinus : IconPlus
  const iconName = isRoot ? IconArrown : childrenOpen

  return (
    <li
      className={classNames('', {
        'border-l border-accent-200 rounded-b-lg': !isRoot,
      })}
    >
      <button
        onClick={() => {
          if (item.children) {
            setIsOpen(!isOpen)
          }
          if (item.onClick) {
            item.onClick()
          }
        }}
        className={classNames('flex items-center w-full py-3 px-2 border-b', {
          'border-accent-200 rounded-b-lg': !isRoot,
          'border-l shadow-bottom-accent rounded-lg ': isRoot,
        })}
      >
        {levelDifferent && (
          <Box
            className='h-1 rounded-sm'
            style={{
              backgroundColor,
              width: `${level * 1}rem`,
            }}
          />
        )}
        <Box className='flex-1 ml-2 overflow-hidden'>{item.label}</Box>
        {item.children && (
          <Box
            className={classNames(
              'ml-2 transition-all duration-300 transform',
              { 'rotate-0': !isOpen, 'rotate-180': isOpen }
            )}
          >
            <Icon
              name={iconName.name}
              width={iconName.size}
              height={iconName.size}
            />
          </Box>
        )}
      </button>
      <AnimatePresence>
        {isOpen && item.children && (
          <AnimationContainer
            as='ul'
            initial={{ height: 0, opacity: 0, y: -10 }}
            animate={{ height: 'auto', opacity: 1, y: 0 }}
            exit={{ height: 0, opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            {item.children.map((child, index) => (
              <DropDownItem
                key={index}
                item={child}
                level={level + 1}
                isRoot={false}
              />
            ))}
          </AnimationContainer>
        )}
      </AnimatePresence>
    </li>
  )
}

const DropDown = ({ items }: RecursiveDropdownProps) => {
  return (
    <ul className='w-full shadow-lg rounded-md'>
      {items.map((item, index) => (
        <DropDownItem key={index} item={item} level={0} isRoot={true} />
      ))}
    </ul>
  )
}

const Content = ({ text, nameIcon }: DropdownContent) => (
  <Box className='flex justify-center items-center gap-2'>
    {nameIcon && <Icon name={nameIcon} width={12} height={12} />}
    <Text className='truncate block w-full text-left' title={text}>
      {text}
    </Text>
  </Box>
)

DropDown.Content = Content

export default DropDown
