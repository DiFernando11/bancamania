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
      <Icon name='Account' className='w-16 h-16' />
      <Icon name='Arrown' className='w-16 h-16' />
      <Icon name='Bitcoin' className='w-16 h-16' />
      <Icon name='Card' className='w-16 h-16' />
      <Icon name='ChipCard' className='w-16 h-16' />
      <Icon name='Close' className='w-16 h-16' />
      <Icon name='Download' className='w-16 h-16' />
      <Icon name='Ellipsis' className='w-16 h-16' />
      <Icon name='EyeClose' className='w-16 h-16' />
      <Icon name='EyeOpen' className='w-16 h-16' />
      <Icon name='Flip' className='w-16 h-16' />
      <Icon name='Gift' className='w-16 h-16' />
      <Icon name='Home' className='w-16 h-16' />
      <Icon name='Info' className='w-16 h-16' />
      <Icon name='Language' className='w-16 h-16' />
      <Icon name='Logo' className='w-16 h-16' />
      <Icon name='Logout' className='w-16 h-16' />
      <Icon name='MasterCard' className='w-16 h-16' />
      <Icon name='Minus' className='w-16 h-16' />
      <Icon name='PaySvg' className='w-16 h-16' />
      <Icon name='Pdf' className='w-16 h-16' />
      <Icon name='Photo' className='w-16 h-16' />
      <Icon name='Plus' className='w-16 h-16' />
      <Icon name='Roulette' className='w-16 h-16' />
      <Icon name='Share' className='w-16 h-16' />
      <Icon name='Statement' className='w-16 h-16' />
      <Icon name='Success' className='w-16 h-16' />
      <Icon name='Transfers' className='w-16 h-16' />
      <Icon name='Wallet' className='w-16 h-16' />
      <Icon name='Warning' className='w-16 h-16' />
      <Icon name='Waves' className='w-16 h-16' />
    </Box>
  ),
}
