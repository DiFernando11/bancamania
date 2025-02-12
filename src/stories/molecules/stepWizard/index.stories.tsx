// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import type { Meta, StoryObj } from '@storybook/react'
import { Box, Text } from '@/ui/atoms'
import { StepWizard } from '@/ui/molecules'

const meta = {
  component: StepWizard,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  title: 'Example/StepWizard',
} satisfies Meta<typeof StepWizard>

export default meta
type Story = StoryObj<typeof meta>

const Step1 = ({ next }) => {
  return (
    <Box className='h-20 w-full border'>
      <Text>Paso 1</Text>
      <button onClick={next}>Next</button>
    </Box>
  )
}

const Step2 = ({ next, prev }) => {
  return (
    <Box className='h-20 w-full border'>
      <Text>Paso 2</Text>
      <Box className='flex gap-5'>
        <button onClick={next}>Next</button>
        <button onClick={prev}>Prev</button>
      </Box>
    </Box>
  )
}

const Step3 = ({ prev }) => {
  return (
    <Box className='h-20 w-full border'>
      <Text>Paso 3</Text>
      <button onClick={prev}>Prev</button>
    </Box>
  )
}

const steps: ((props: StepProps) => JSX.Element)[] = [
  props => <Step1 {...props} />,
  props => <Step2 {...props} />,
  props => <Step3 {...props} />,
]

export const StepExample: Story = {
  args: { initialStep: 0, steps },
}
