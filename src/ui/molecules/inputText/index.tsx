import { InputBaseProps } from '@/ui/atoms/inputBase/types'
import InputBase from '../../atoms/inputBase'

const InputText = ({ value, ...props }: InputBaseProps) => {
  return <InputBase {...props} type='text' value={value} />
}

export default InputText
