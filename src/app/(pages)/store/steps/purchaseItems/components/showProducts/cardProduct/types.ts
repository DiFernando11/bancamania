export type CardProductProps = {
  image: string
  title: string
  value: number
  price: string | number
  onChange: (value: number) => void
}
