'use client'
import classNames from 'classnames'
import { useRouter } from 'next/navigation'
import React from 'react'
import { useI18Text } from '@/application/hooks/commons'
import { useMenuBuild } from '@/shared/hooks'
import { Box } from '@/ui/atoms'
import { DropDown } from '@/ui/molecules'
import BottomSideBar from './bottomSideBar'

const SideBar = () => {
  const t = useI18Text('commonAriaLabel')
  const router = useRouter()
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
        <Box
          className={classNames('overflow-auto')}
          style={{
            scrollbarWidth: 'none',
          }}
        >
          <DropDown items={menu} component={DropDown.Menu} />
        </Box>
        <BottomSideBar />
      </Box>
    </aside>
  )
}

export default SideBar
