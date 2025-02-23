import React from 'react'
import { useI18Text } from '@/application/hooks'
import { LottiePlayer, Text } from '@/ui/atoms'
import { Card } from '@/ui/molecules'

const PlayToWin = () => {
  const t = useI18Text('home')

  return (
    <Card className='flex gap-2 justify-center items-center p-4 cursor-pointer'>
      <Text textType='font_14_16_fw_bold_fm_rob'>{t('rouletteCard')}</Text>
      <LottiePlayer name='game' className='w-16 h-16' />
    </Card>
  )
}

export default PlayToWin
