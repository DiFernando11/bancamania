/* eslint-disable */
// @ts-nocheck
import type { Meta, StoryObj } from '@storybook/react'
import { LottieLogout } from '@/ui/atoms'

const meta = {
  component: LottieLogout,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Example/LottieLogout',
} satisfies Meta<typeof LottieLogout>

export default meta
type Story = StoryObj<typeof meta>

export const Logout: Story = {
  args: {},
}
