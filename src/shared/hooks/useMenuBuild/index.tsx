'use client'
import { useMemo } from 'react'
import { useI18Text } from '@/application/hooks'
import { buildMenu } from '@/shared/utils'
import { useCurrentPath } from '../useCurrentPath'
import { buildCuentasOption } from './account'
import { buildTarjetasOption } from './cards'
import { buildConsolidadaOption } from './consolidada'
import { buildReceipts } from './receipts'
import { buildRouletteOption } from './roulette'
import { buildTransferOption } from './transfer'

export const useMenuBuild = ({
  handleClick,
}: {
  handleClick: (path: string) => void
}) => {
  const t = useI18Text()
  const path = useCurrentPath()

  const textClass = (pathCurrent: string, noActive = true) =>
    path?.path === pathCurrent && noActive ? 'text-primary-200' : ''

  const menuOptions = [
    buildConsolidadaOption({ handleClick, t, textClass }),
    buildTransferOption({ handleClick, t, textClass }),
    buildRouletteOption({ handleClick, t, textClass }),
    buildCuentasOption({ handleClick, t, textClass }),
    buildTarjetasOption({ handleClick, t, textClass }),
    buildReceipts({ handleClick, t, textClass }),
  ]

  const menu = useMemo(
    () => buildMenu(menuOptions, path?.path ?? ''),
    [menuOptions, path]
  )

  return { menu }
}
