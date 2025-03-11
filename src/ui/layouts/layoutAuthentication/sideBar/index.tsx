'use client'
import classNames from 'classnames'
import React from 'react'
import { useI18Text } from '@/application/hooks/commons'
import { useMenuBuild, useNavigation } from '@/shared/hooks'
import { Box } from '@/ui/atoms'
import { DropDown } from '@/ui/molecules'
import BottomSideBar from './bottomSideBar'

const SideBar = () => {
  const t = useI18Text('commonAriaLabel')
  const router = useNavigation()
  const handleClick = (path: string) => router.push(path)
  const { menu } = useMenuBuild({ handleClick })

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
        <Box className={classNames('overflow-auto scrollbar-custom')}>
          <DropDown items={menu} component={DropDown.Menu} />
        </Box>
        <BottomSideBar />
      </Box>
    </aside>
  )
}

export default SideBar
