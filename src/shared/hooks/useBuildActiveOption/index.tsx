'use client'
import { useMemo } from 'react'
import { MenuOption } from '@/shared/types'
import { buildMenu } from '@/shared/utils'
import { useCurrentPath } from '../useCurrentPath'

export const useBuildActiveOption = ({
  options,
}: {
  options: MenuOption[]
}) => {
  const path = useCurrentPath()

  const pathCurrent = path?.path ?? ''

  const menu = useMemo(
    () => buildMenu(options, pathCurrent),
    [options, pathCurrent]
  )

  return { menu }
}
