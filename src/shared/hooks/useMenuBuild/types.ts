export interface BuildOptionProps {
  t: (key: string) => string
  handleClick: (path: string) => void
  textClass: (pathCurrent: string, noActive?: boolean) => string
}
