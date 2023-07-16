import { useEffect, useState } from 'react'
import { useIsClient } from './ClientContext'

function parseValue (value) {
  try {
    return JSON.parse(value)
  } catch {
    return value
  }
}

export function useWithLocalStorage (itemKey, initialValue, stateFn = useState) {
  const isClient = useIsClient();

  const initialStorageValue = isClient ? window.localStorage.getItem(itemKey) : null

  const [value, setValue] = stateFn(
    initialStorageValue ? parseValue(initialStorageValue) : initialValue
  )

  useEffect(() => {
    if (!isClient) return
    if (value) {
      window.localStorage.setItem(itemKey, JSON.stringify(value))
    } else {
      window.localStorage.removeItem(itemKey)
    }
  }, [value, itemKey])

  return [value, setValue]
}
