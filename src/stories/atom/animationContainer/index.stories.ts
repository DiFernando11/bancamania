import type { Meta, StoryObj } from '@storybook/react'
import { AnimationContainer } from '@/ui/atoms'

const meta = {
  component: AnimationContainer,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  title: 'Example/AnimationContainer',
} satisfies Meta<typeof AnimationContainer>

export default meta
type Story = StoryObj<typeof meta>

export const AnimationEaseOut: Story = {
  args: {
    children: 'Hello, World!',
    variants: {
      hidden: { opacity: 0, x: 100 },
      visible: {
        opacity: 1,
        transition: {
          duration: 0.6,
          ease: 'easeOut',
        },
        x: 0,
      },
    },
  },
}
