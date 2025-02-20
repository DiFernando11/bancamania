'use client'
import React, { useMemo } from 'react'
import { useI18Text } from '@/application/hooks'
import { clientRoutes } from '@/routes/clientRoutes'
import { buildMenu } from '@/shared/utils'
import { DropDown } from '@/ui/molecules'
import { useCurrentPath } from '../useCurrentPath'

export const useMenuBuild = ({
  handleClick,
}: {
  handleClick: (path: string) => void
}) => {
  const t = useI18Text()
  const { cuentas, tarjetas, consolidada } = clientRoutes
  const path = useCurrentPath()

  const textClass = (pathCurrent: string, noActive = true) =>
    path?.path === pathCurrent && noActive ? 'text-primary-200' : ''

  const menuOptions = [
    {
      label: (
        <DropDown.Content
          text={t('option.consolidada')}
          textClassName={textClass(consolidada.path)}
          nameIcon='Home'
          iconClassName='w-10 h-10'
        />
      ),
      onClick: () => handleClick(consolidada.path),
      ...consolidada,
    },
    {
      label: (
        <DropDown.Content
          text={t('option.misCuentas')}
          nameIcon='Account'
          textClassName={textClass(cuentas.path, false)}
          iconClassName='w-10 h-10'
        />
      ),
      ...cuentas,
      children: [
        {
          label: (
            <DropDown.Content
              text={t('option.cuentas')}
              textClassName={textClass(cuentas.path)}
            />
          ),
          onClick: () => handleClick(cuentas.path),
          ...cuentas,
        },
      ],
    },
    {
      label: (
        <DropDown.Content
          nameIcon='Tarjetas'
          text={t('option.misTarjetas')}
          textClassName={textClass(tarjetas.path, false)}
          iconClassName='w-10 h-10'
        />
      ),
      ...tarjetas,
      children: [
        {
          label: (
            <DropDown.Content
              text={t('option.tarjetas')}
              textClassName={textClass(tarjetas.path)}
            />
          ),
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
