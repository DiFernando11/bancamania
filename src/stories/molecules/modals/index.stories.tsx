// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import type { Meta, StoryObj } from '@storybook/react'
import { Box } from '@/ui/atoms'
import { Modal } from '@/ui/molecules'

const meta = {
  argTypes: {
    children: {
      control: 'text',
      defaultValue: 'contenido del Modal',
      description: 'Contenido del modal',
    },
    position: {
      control: 'select',
      defaultValue: 'center',
      description: 'Posición del modal',
      options: ['center', 'bottom', 'left', 'right'],
    },
  },
  component: Modal,
  parameters: { layout: 'fullscreen' },
  tags: ['autodocs'],
  title: 'Example/Modal',
} satisfies Meta<typeof Modal>

export default meta
type Story = StoryObj<typeof meta>
type PositionType = 'center' | 'bottom' | 'left' | 'right'

const DefaultModal = ({
  position,
  children,
}: {
  position: PositionType
  children: string
}) => {
  return (
    <Box className='h-screen w-full flex justify-center items-center overflow-y-auto p-5'>
      <Modal position={position}>
        <Modal.Header className='flex gap-5'>
          <Modal.Title title='Modal titulo' />
        </Modal.Header>
        <Modal.Content>{children}</Modal.Content>
        <Modal.Footer>Modal Footer</Modal.Footer>
      </Modal>
    </Box>
  )
}

export const ModalCenter: Story = {
  args: {
    children: 'Contenido editable desde los controles',
    position: 'center', // Valor explícito
  },
  render: args => <DefaultModal {...args} />,
}

export const ModalBottom: Story = {
  args: {
    children: 'Contenido editable desde los controles',
    position: 'bottom',
  },
  render: args => <DefaultModal {...args} />,
}

export const ModalLeft: Story = {
  args: {
    children: 'Contenido editable desde los controles',
    position: 'left',
  },
  render: args => <DefaultModal {...args} />,
}

export const ModalRight: Story = {
  args: {
    children: 'Contenido editable desde los controles',
    position: 'right',
  },
  render: args => <DefaultModal {...args} />,
}
