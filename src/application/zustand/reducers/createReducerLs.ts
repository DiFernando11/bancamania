import { StoragePrimitive } from "@/shared";

type StorageValue = { [key: string]: StoragePrimitive };

const isLocalStorageAvailable =
  typeof window !== "undefined" && typeof localStorage !== "undefined";

const getStoredValue = (storageKey: string): StorageValue => {
  if (!isLocalStorageAvailable) return {};
  const storedValue = localStorage.getItem(storageKey);
  return storedValue
    ? JSON.parse(storedValue, (key, value) => {
        if (typeof value === "string" && Date.parse(value)) {
          return new Date(value);
        }
        return value;
      })
    : {};
};

const setStoredValue = (storageKey: string, newValue: StorageValue) => {
  if (!isLocalStorageAvailable) return;
  const serializedValue = JSON.stringify(newValue, (key, value) => {
    if (value instanceof Date) {
      return value.toLocaleString();
    }
    return value;
  });
  localStorage.setItem(storageKey, serializedValue);
};

export const flushStoredValue = (storageKey: string) => {
  if (!isLocalStorageAvailable) return;
  localStorage.removeItem(storageKey);
};

type StoreActions<T extends string, V extends StoragePrimitive> = Record<
  T,
  V
> & {
  [K in `set${Capitalize<T>}`]: (value: V) => void;
} & {
  [K in `flush${Capitalize<T>}`]: () => void;
};

export const createReducerLs = <T extends string, V extends StoragePrimitive>(
  storageKey: string,
  key: T,
  initialValue: V
): StoreActions<T, V> => {
  const capitalizedType = key.charAt(0).toUpperCase() + key.slice(1);

  const getMethod = (): V => {
    const storedValue = getStoredValue(storageKey);
    return (storedValue[key] as V) ?? initialValue;
  };

  const setMethod = (value: V) => {
    const storedValue = getStoredValue(storageKey);
    storedValue[key] = value;
    setStoredValue(storageKey, storedValue);
  };

  const flushMethod = () => {
    setMethod(initialValue);
  };

  return {
    [key]: getMethod(),
    [`set${capitalizedType}`]: setMethod,
    [`flush${capitalizedType}`]: flushMethod,
  } as StoreActions<T, V>;
};
