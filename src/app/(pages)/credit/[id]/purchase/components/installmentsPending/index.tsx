'use client'
import React from 'react'
import { useGetInstallmentsCredit, useI18Text } from '@/application/hooks'
import { formatDateReplace, formatMoney } from '@/shared/utils'
import { Box, Text } from '@/ui/atoms'
import { BitcoinSymbol } from '@/ui/molecules'
import { AlertErrorService, SkeletonLoader } from '@/ui/organisms'
import SkeletonsInstallments from './installmensSkeleton'
import Installments from './installments'
import FormPayCredit from '../formPayCredit'
import SkeletonPayCredit from '../formPayCredit/skeletonPayCredit'

const InstallmentsPending = ({ id }: { id: string }) => {
  const t = useI18Text('tarjetas')
  const { data, isLoading, isError, error } = useGetInstallmentsCredit({
    creditId: id,
  })

  if (isError) return <AlertErrorService isError={isError} error={error} />

  return (
    <Box className='space-y-4'>
      <SkeletonLoader isLoading={isLoading} classNameSkeleton='max-w-80 h-5'>
        <BitcoinSymbol
          balance={t('totalConsumption', {
            total: formatMoney({ value: data?.totalAmount }),
          })}
          textType='font_18_20_fw_bold_fm_rob'
          classIcon='w-6 h-6'
        />
      </SkeletonLoader>
      <SkeletonLoader isLoading={isLoading} classNameSkeleton='max-w-80 h-4'>
        <Text>
          {t('interestDateLimit', {
            date: formatDateReplace(
              data?.lastDayWithoutInterest as Date,
              "dd 'de' MMMM"
            ),
          })}
        </Text>
      </SkeletonLoader>
      {data && (
        <FormPayCredit
          minimumPayment={data?.minimumPayment}
          totalAmount={data?.totalAmount}
          totalPaymentAtOnce={data?.totalPaymentAtOnce}
          id={id}
        />
      )}
      {isLoading && (
        <>
          <SkeletonPayCredit />
          <SkeletonsInstallments count={5} />
        </>
      )}
      {data?.installments?.map(
        ({
          id,
          description,
          installmentNumber,
          totalInstallments,
          dayOfpurchase,
          totalToPay,
          isOverdue,
          overdueDays,
          lateFee,
          amount,
        }) => (
          <Installments
            key={id}
            description={description}
            installmentNumber={installmentNumber}
            totalInstallments={totalInstallments}
            dayOfpurchase={dayOfpurchase}
            totalToPay={totalToPay}
            isOverdue={isOverdue}
            overdueDays={overdueDays}
            lateFee={lateFee}
            amount={amount}
          />
        )
      )}
    </Box>
  )
}

export default InstallmentsPending
