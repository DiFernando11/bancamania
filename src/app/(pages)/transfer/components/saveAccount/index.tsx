'use client'
import classNames from 'classnames'
import React from 'react'
import { useFormContext } from 'react-hook-form'
import { useI18Text } from '@/application/hooks'
import { VerifyAccountResponse } from '@/shared'
import { Box, Text } from '@/ui/atoms'
import { CheckBox, FormField, IconText } from '@/ui/molecules'
import AliasInput from '../aliasInput'
import { FORM_TRANSFER_NAME } from '../formTransfer/types'

const SaveAccount = ({
  disabled,
  data,
}: {
  disabled: boolean
  data?: VerifyAccountResponse
}) => {
  const { setValue, watch, setFocus } = useFormContext()
  const t = useI18Text('transfer')
  const isChecked = watch(FORM_TRANSFER_NAME.saveAccount) || false

  const handleClick = () => {
    setValue(FORM_TRANSFER_NAME.alias, '')
    if (!disabled) {
      return setValue(FORM_TRANSFER_NAME.saveAccount, !isChecked, {
        shouldValidate: true,
      })
    }

    return setFocus(FORM_TRANSFER_NAME.accountId)
  }

  return (
    <Box className='flex flex-col gap-4'>
      <Text textType='font_18_fw_bold_fm_rob'>{t('personalInf')}</Text>
      <Box
        className={classNames(
          { 'border-gray-500 !cursor-not-allowed': disabled },
          'border-2 border-primary-100',
          'p-4 flex justify-between items-center cursor-pointer',
          'transition-colors duration-300 ease-in-out'
        )}
        onClick={handleClick}
      >
        <IconText
          text='Guardar contacto'
          classIcon={classNames(
            'w-10 h-10 transition-colors duration-300 ease-in-out',
            {
              'text-gray-500': disabled,
              'text-primary-100': !disabled,
            }
          )}
          nameIcon='AddContact'
        />
        <FormField
          component={CheckBox}
          name={FORM_TRANSFER_NAME.saveAccount}
          checked={isChecked}
          disabled={disabled}
          onChange={handleClick}
        />
      </Box>
      <AliasInput isVisible={isChecked} data={data} />
    </Box>
  )
}

export default SaveAccount
