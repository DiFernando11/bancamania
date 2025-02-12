import type { Meta, StoryObj } from '@storybook/react'
import { Box, LottiePlayer } from '@/ui/atoms'

const meta = {
  component: LottiePlayer,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Example/LottiePlayer',
} satisfies Meta<typeof LottiePlayer>

export default meta
type Story = StoryObj<typeof meta>

export const Lotties: Story = {
  args: {
    name: 'maintenance',
  },
  render: () => (
    <Box className='flex justify-center items-center gap-5'>
      <LottiePlayer name='logout' className='w-20 h-20' />
      <LottiePlayer name='maintenance' className='w-20 h-20' />
      <LottiePlayer name='createAccount' className='w-20 h-20' />
    </Box>
  ),
}

export const Lottie: Story = {
  args: {
    height: 300,
    name: 'maintenance',
    width: 300,
  },
}
