'use client'
import classNames from 'classnames'
import React from 'react'
import { useI18Text } from '@/application/hooks/commons'
import { useMenuBuild } from '@/shared/hooks'
import { Box } from '@/ui/atoms'
import { DropDown } from '@/ui/molecules'

const SideBar = () => {
  const t = useI18Text('commonAriaLabel')
  const { menu } = useMenuBuild()

  return (
    <aside
      aria-label={t('aside')}
      className={classNames(
        'hidden',
        'row-start-2 col-start-1 col-span-1 ',
        'shadow-right-accent border-accent-200 rounded-b-3xl',
        'sm:block'
      )}
    >
      <Box
        className={classNames(
          'grid h-menu-destokp w-full grid-rows-[1fr_auto]'
        )}
      >
        <Box
          className={classNames('overflow-auto')}
          style={{
            scrollbarWidth: 'none',
          }}
        >
          <DropDown items={menu} component={DropDown.Menu} />
        </Box>
        <Box className='flex flex-col border-t-2 border-accent-200'>
          <button className='text-left p-4'>
            <DropDown.Content text='Detalle' />
          </button>
          <button className='text-left p-4 border-t border-accent-200'>
            <DropDown.Content text='Detalle' />
          </button>
        </Box>
      </Box>
    </aside>
  )
}

export default SideBar
