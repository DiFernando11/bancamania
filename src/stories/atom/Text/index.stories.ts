import type { Meta, StoryObj } from '@storybook/react'
import { Text } from '@/ui/atoms'

const meta = {
  component: Text,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  title: 'Example/Text',
} satisfies Meta<typeof Text>

export default meta
type Story = StoryObj<typeof meta>

export const HeadingLarge: Story = {
  args: { children: 'Hello, World!', textType: 'headingLarge', variant: 'h1' },
}

export const HeadingMedium: Story = {
  args: { children: 'Hello, World!', textType: 'headingMedium', variant: 'h2' },
}

export const HeadingSmall: Story = {
  args: { children: 'Hello, World!', textType: 'headingSmall', variant: 'h3' },
}
