'use client'
import classNames from 'classnames'
import React from 'react'
import { useI18Text } from '@/application/hooks/commons'
import { DropDown } from '@/ui/molecules'

const menuItems = [
  {
    label: <DropDown.Content text='Hola como estas' />,
  },
  {
    children: [
      {
        label: <DropDown.Content text='Hola como estas' />,
      },
      {
        children: [
          {
            children: [
              {
                label: <DropDown.Content text='Hola como estas' />,
              },
            ],
            label: <DropDown.Content text='Hola como estas' />,
          },
        ],
        label: <DropDown.Content text='Hola como estas' />,
      },
    ],
    label: <DropDown.Content text='Hola como estas' />,
  },
  {
    label: <DropDown.Content text='Hola como estas' />,
  },
]

const SideBar = () => {
  const t = useI18Text('commonAriaLabel')

  return (
    <aside
      aria-label={t('aside')}
      className={classNames(
        'py-4 px-1 hidden',
        'row-start-2 col-start-1 col-span-1 ',
        'shadow-right-accent border-accent-200',
        'sm:block rounded-b-3xl'
      )}
    >
      <nav>
        <DropDown items={menuItems} />
      </nav>
    </aside>
  )
}

export default SideBar
