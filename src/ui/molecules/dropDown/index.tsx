'use client'

import classNames from 'classnames'
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

const Content = ({
  text,
  nameIcon,
  className,
  textClassName,
  size,
}: DropdownContent) => (
  <Box
    className={classNames('flex justify-center items-center gap-2', className)}
  >
    {nameIcon && <Icon name={nameIcon} width={size} height={size} />}
    <Text
      className={classNames('truncate block w-full text-left', textClassName)}
      title={text}
      textType='font_16_fw_bold_fm_rob'
    >
      {text}
    </Text>
  </Box>
)

DropDown.Content = Content
DropDown.Menu = DropDownMenu

export default DropDown
