import { useI18Text } from '@/application/hooks'
import { Box, LottiePlayer, Text } from '@/ui/atoms'
import { StepProps } from '@/ui/molecules/stepWizard/types'
import NextStep from '../../nextStep'

export const StepAccountCreate = ({ next }: StepProps) => {
  const t = useI18Text('onBoarding')

  return (
    <Box className='flex flex-col sm:flex-row h-full w-full'>
      <Box className='flex flex-1 flex-col justify-center items-center'>
        <Text
          textType='font_30_48_fw_bold_fm_rob_text-200'
          variant='h1'
          className='text-center'
        >
          {t('welcome', { name: 'Diego Apolo' })}
        </Text>
        <LottiePlayer
          name='createAccount'
          isCursorPointer={false}
          className='w-full h-full'
        />
        <Text
          textType='font_16_18_fw_bold_fm_rob'
          className='text-center'
          variant='h2'
        >
          {t('benefits')}
        </Text>
      </Box>
      <NextStep next={next} />
    </Box>
  )
}
