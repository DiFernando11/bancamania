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
      <Icon name='Close' width={60} height={60} />
      <Icon name='Home' width={60} height={60} />
      <Icon name='Transfers' width={60} height={60} />
      <Icon name='Tarjetas' width={60} height={60} />
      <Icon name='Logo' className='w-16 h-16' />
      <Icon name='Logout' width={60} height={60} />
      <Icon name='Account' className='w-16 h-16' />
      <Icon name='Bitcoin' className='w-16 h-16' />
      <Icon name='EyeClose' className='w-16 h-16' />
      <Icon name='EyeOpen' className='w-16 h-16' />
    </Box>
  ),
}
