import { StepProps } from '@/ui/organisms/stepWizard/types'
import { DataItemsPurchase } from '../../../types'

export type ShowProductsProps = Pick<StepProps<DataItemsPurchase>, 'stepData'>
