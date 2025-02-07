'use client'
import { useRouter } from 'next/navigation'
import React, { useMemo } from 'react'
import { clientRoutes } from '@/routes/clientRoutes'
import { buildMenu } from '@/shared/utils'
import { DropDown } from '@/ui/molecules'
import { useCurrentPath } from '../useCurrentPath'

export const useMenuBuild = () => {
  const { cuentas, tarjetas, consolidada } = clientRoutes
  const path = useCurrentPath()

  const router = useRouter()

  const menuOptions = [
    {
      label: <DropDown.Content text='Mi Consolidada' />,
      onClick: () => router.push(consolidada.path),
      ...consolidada,
    },
    {
      label: <DropDown.Content text='Mis Cuentas' />,
      ...cuentas,
      children: [
        {
          label: <DropDown.Content text='Cuentas' />,
          onClick: () => router.push(cuentas.path),
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
          onClick: () => router.push(tarjetas.path),
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
