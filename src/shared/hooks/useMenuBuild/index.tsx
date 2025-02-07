'use client'
import React, { useMemo } from 'react'
import { clientRoutes } from '@/routes/clientRoutes'
import { buildMenu } from '@/shared/utils'
import { DropDown } from '@/ui/molecules'
import { useCurrentPath } from '../useCurrentPath'

export const useMenuBuild = ({
  handleClick,
}: {
  handleClick: (path: string) => void
}) => {
  const { cuentas, tarjetas, consolidada } = clientRoutes
  const path = useCurrentPath()

  const menuOptions = [
    {
      label: <DropDown.Content text='Mi Consolidada' />,
      onClick: () => handleClick(consolidada.path),
      ...consolidada,
    },
    {
      label: <DropDown.Content text='Mis Cuentas' />,
      ...cuentas,
      children: [
        {
          label: <DropDown.Content text='Cuentas' />,
          onClick: () => handleClick(cuentas.path),
          ...cuentas,
        },
      ],
    },
    {
      label: <DropDown.Content text='Mis Tarjetas' />,
      ...tarjetas,
      children: [
        {
          label: <DropDown.Content text='Tarjetas' />,
          onClick: () => handleClick(tarjetas.path),
          ...tarjetas,
        },
      ],
    },
  ]

  const menu = useMemo(
    () => buildMenu(menuOptions, path?.path ?? ''),
    [menuOptions, path]
  )

  return { menu }
}
