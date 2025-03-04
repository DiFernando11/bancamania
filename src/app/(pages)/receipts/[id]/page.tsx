'use client'
import React from 'react'
import ButtonActionSimple from '@/app/components/buttonActionSimple'
import { useGetReceiptByUUID, useI18Text } from '@/application/hooks'
import { Box, Icon, Text } from '@/ui/atoms'
import { LayoutAuthenticationPage } from '@/ui/layouts'
import { ButtonText } from '@/ui/molecules'

const ReceiptsPage = ({ params }: { params: { id: string } }) => {
  const { data } = useGetReceiptByUUID({ receiptId: params.id })

  const { title, id, dataReceipts, createdAt } = data || {}
  const t = useI18Text()

  return (
    <LayoutAuthenticationPage
      footerBox={
        <Box className='flex w-full gap-4 my-4'>
          <ButtonText
            className='flex-1'
            onClick={() => console.log('red')}
            text={'Compartir'}
          />
          <ButtonText
            className='flex-1'
            onClick={() => console.log('red')}
            text={'Share'}
          />
        </Box>
      }
    >
      <Box className='receipts flex flex-col gap-6'>
        <Box className='flex justify-center flex-col items-center'>
          <Icon name='Success' className='w-16 h-16' />
          <Text textType='font_24_fw_bold_fm_rob'>{title}</Text>
          <Text textType='font_16_fw_bold_fm_rob' className='text-center'>
            Comprobante {id}
          </Text>
        </Box>
        <Text textType='font_16_fw_bold_fm_rob'>
          {t('date', { date: createdAt })}
        </Text>
        <div className='dataReceipts'>
          {dataReceipts?.map(({ key, value, style }, index) => (
            <Box key={index}>
              <Box className='flex gap-4 justify-between'>
                <Text textType='font_16_fw_bold_fm_rob'>{key}</Text>
                <Text textType='font_16_fm_rob' className='break-all text-end'>
                  {value}
                </Text>
              </Box>
              {style?.hr && <hr className='mb-4' />}
            </Box>
          ))}
        </div>
      </Box>
    </LayoutAuthenticationPage>
  )
}

export default ReceiptsPage
