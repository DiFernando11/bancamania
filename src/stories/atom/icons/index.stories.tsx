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
    <Box className='flex justify-center items-center gap-5'>
      <Icon name='Close' width={14} height={14} />
    </Box>
  ),
}
