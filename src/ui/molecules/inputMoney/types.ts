export type InputMoneyProps = {
  value?: number | string
  onChange: (val: number) => void
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'value'>
