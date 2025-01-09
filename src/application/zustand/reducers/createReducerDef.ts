// reducers/createReducer.ts
type StoreActions<T extends string, V> = Record<T, V> & {
  [K in `set${Capitalize<T>}`]: (value: V) => void
} & {
  [K in `flush${Capitalize<T>}`]: () => void
}

export function createReducer<T extends string, V>(
  type: T,
  initialValue: V,
  set: (state: Partial<StoreActions<T, V>>) => void
): StoreActions<T, V> {
  const capitalizedType = type.charAt(0).toUpperCase() + type.slice(1)

  return {
    [type]: initialValue,
    [`set${capitalizedType}`](value: V) {
      set({ [type]: value } as Partial<StoreActions<T, V>>)
    },
    [`flush${capitalizedType}`]() {
      set({ [type]: initialValue } as Partial<StoreActions<T, V>>)
    },
  } as StoreActions<T, V>
}
