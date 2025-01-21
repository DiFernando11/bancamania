/* eslint-disable */
// @ts-nocheck
import type { Meta, StoryObj } from '@storybook/react'
import { Box, LottiePlayer, LottiePlayerInteractive } from '@/ui/atoms'

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
  args: {},
  render: () => (
    <Box className='flex justify-center items-center gap-5'>
      <LottiePlayer name='logout' width={66} height={66} />
      <LottiePlayer name='maintenance' />
    </Box>
  ),
}

export const Lottie: Story = {
  args: {
    name: 'maintenance',
    width: 300,
    height: 300,
  },
}
