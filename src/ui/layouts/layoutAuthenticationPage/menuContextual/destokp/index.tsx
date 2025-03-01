'use client'
import React, { useMemo } from 'react'
import { useI18Text } from '@/application/hooks'
import { MenuOption } from '@/shared'
import { useBuildActiveOption } from '@/shared/hooks'
import { Box } from '@/ui/atoms'
import { DropDown } from '@/ui/molecules'

const DestokpMenuContextual = ({ options = [] }: { options: MenuOption[] }) => {
  const { menu } = useBuildActiveOption({ options })
  const t = useI18Text()

  const menuOptions = useMemo(
    () => [
      {
        alwaysShow: true,
        children: menu,
        isDefaultOpen: true,
        label: <DropDown.Content text={t('options')} />,
      },
    ],
    [options]
  )

  if (!menu.length) return null

  return (
    <Box className='mr-2 mt-6 hidden lg:flex'>
      <DropDown
        className='bg-primary-100'
        items={menuOptions}
        component={DropDown.Menu}
      />
    </Box>
  )
}

export default DestokpMenuContextual
