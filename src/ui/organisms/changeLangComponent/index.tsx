import React from 'react'
import { useI18Text } from '@/application/hooks'
import { useChangeLang } from '@/shared/hooks'
import { DropDown } from '@/ui/molecules'

const ChangeLangComponent = () => {
  const { changeLang } = useChangeLang()
  const tCommon = useI18Text()

  return (
    <DropDown.Content
      text={tCommon('languague', {
        locale: changeLang?.toUpperCase(),
      })}
      nameIcon='Language'
      className='text-left'
    />
  )
}

export default ChangeLangComponent
