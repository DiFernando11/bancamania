export type ButtonOption = {
  id: string | number
  label: string
}

export type ButtonGroupProps = {
  options: ButtonOption[]
  defaultSelected?: string
  value?: string | number
  onChange?: (selectedId: string | number) => void
  name?: string
  className?: string
  classNameButton?: string
  ref?: React.Ref<HTMLDivElement>
}
