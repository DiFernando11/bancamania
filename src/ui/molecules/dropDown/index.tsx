'use client'

import { AnimatePresence } from 'framer-motion'
import React, { useState } from 'react'
import { AnimationContainer, Box, Icon, Text } from '@/ui/atoms'
import { DropDownMenu } from './dropDownMenu'
import {
  DropdownContent,
  DropdownItemProps,
  RecursiveDropdownProps,
} from './types'

const DropDownItem: React.FC<DropdownItemProps> = ({
  item,
  level,
  isRoot,
  component: Component,
}) => {
  const [isOpen, setIsOpen] = useState(item?.isChildrenActive)

  return (
    <li>
      <Component
        item={item}
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        isRoot={isRoot}
      />
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
                component={Component}
              />
            ))}
          </AnimationContainer>
        )}
      </AnimatePresence>
    </li>
  )
}

const DropDown = ({ items, component: Component }: RecursiveDropdownProps) => {
  return (
    <ul className='w-full shadow-lg rounded-md'>
      {items.map((item, index) => (
        <DropDownItem
          key={index}
          item={item}
          level={0}
          isRoot={true}
          component={Component}
        />
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
DropDown.Menu = DropDownMenu

export default DropDown
