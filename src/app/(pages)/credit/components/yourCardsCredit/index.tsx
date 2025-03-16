import React from 'react'
import { useI18Text } from '@/application/hooks'
import { useGetCardsCredit } from '@/application/hooks/cards/useGetCardsCredit'
import { clientRoutes } from '@/routes/clientRoutes'
import { TypeCardCredit } from '@/shared'
import { useNavigation } from '@/shared/hooks'
import { Box } from '@/ui/atoms'
import { IconText } from '@/ui/molecules'
import { SelectedOption } from '@/ui/organisms'
import SkeletonCardsCredit from './skeleton'

const YourCardsCredit = () => {
  const { data, isLoading } = useGetCardsCredit()
  const router = useNavigation()
  const t = useI18Text('tarjetas')

  return (
    <Box className='flex gap-4 flex-col'>
      {isLoading ? (
        <SkeletonCardsCredit count={2} />
      ) : (
        data?.map(credit => (
          <SelectedOption
            key={credit.id}
            onClick={() => router.push(clientRoutes.debit.path)}
          >
            <IconText
              classText='break-all'
              textType='font_16_18_fw_bold_fm_rob'
              nameIcon={
                TypeCardCredit.MASTERCARD === credit.marca
                  ? 'MasterCard'
                  : 'Visa'
              }
              classIcon='w-10 h-10 min-w-10'
              text={t('numberCard', { number: credit.cardNumber })}
            />
          </SelectedOption>
        ))
      )}
    </Box>
  )
}

export default YourCardsCredit
