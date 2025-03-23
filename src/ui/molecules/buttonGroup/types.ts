export type ButtonOption = {
  id: string
  label: string
}

export type ButtonGroupProps = {
  options: ButtonOption[]
  defaultSelected?: string
  value?: string
  onChange?: (selectedId: string) => void
  name?: string
  className?: string
  classNameButton?: string
  ref?: React.Ref<HTMLDivElement>
}
