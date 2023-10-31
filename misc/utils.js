import { useEffect, useState } from 'react'
import { useIsClient } from './ClientContext'

export function useWithLocalStorage(itemKey, initialValue, stateFn = useState) {
  const isClient = useIsClient();

  const initialStorageValue = isClient ? window.localStorage.getItem(itemKey) : null

  const [value, setValue] = stateFn(
    initialStorageValue ? initialStorageValue : initialValue
  )

  useEffect(() => {
    if (!isClient) return
    if (value) {
      window.localStorage.setItem(itemKey, value)
    } else {
      window.localStorage.removeItem(itemKey)
    }
  }, [value, itemKey])

  return [value, setValue]
}
