export type StoragePrimitive =
  | string
  | number
  | boolean
  | null
  | undefined
  | { [key: string]: StoragePrimitive }
  | Date
