import classNames from 'classnames'
import React from 'react'
import { Icon, Text } from '@/ui/atoms'
import { IconNames } from '@/ui/atoms/icons/icon/types'
import { ButtonQuickAccess } from '@/ui/molecules'

const ButtonsActions = ({
  text,
  onClick,
  iconName,
  iconClass = 'w-10 h-10 sm:w-14 sm:h-14',
}: {
  text: string
  onClick: () => void
  iconName: IconNames
  iconClass?: string
}) => {
  return (
    <ButtonQuickAccess
      className={classNames(
        'flex flex-col gap-2 text-center items-center',
        'justify-between p-4 h-full cursor-pointer sm:gap-0'
      )}
      onClick={onClick}
    >
      <Icon name={iconName} className={iconClass} />
      <Text textType='font_12_14_fw_bold_fm_rob' className='mt-auto'>
        {text}
      </Text>
    </ButtonQuickAccess>
  )
}

export default ButtonsActions
