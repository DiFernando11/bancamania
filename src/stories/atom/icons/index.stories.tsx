import type { Meta, StoryObj } from '@storybook/react'
import { Box, Icon, LottiePlayer } from '@/ui/atoms'

const meta = {
  component: Icon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Example/Icon',
} satisfies Meta<typeof Icon>

export default meta
type Story = StoryObj<typeof meta>

export const Icons: Story = {
  args: {
    name: 'Close',
  },
  render: () => (
    <Box className='bg-black flex justify-center items-center gap-5'>
      <Icon name='Close' className='w-16 h-16' />
      <Icon name='Home' className='w-16 h-16' />
      <Icon name='Transfers' className='w-16 h-16' />
      <Icon name='Tarjetas' className='w-16 h-16' />
      <Icon name='Logo' className='w-16 h-16' />
      <Icon name='Logout' className='w-16 h-16' />
      <Icon name='Account' className='w-16 h-16' />
      <Icon name='Bitcoin' className='w-16 h-16' />
      <Icon name='EyeClose' className='w-16 h-16' />
      <Icon name='EyeOpen' className='w-16 h-16' />
      <Icon name='ChipCard' className='w-16 h-16' />
      <Icon name='MasterCard' className='w-16 h-16' />
      <Icon name='Waves' className='w-16 h-16' />
    </Box>
  ),
}
