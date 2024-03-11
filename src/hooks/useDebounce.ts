import { useEffect, useState } from 'react';

export function useDebounce<T>(value: T, ms: number) {
  const [debouncedValue, setDebouncedValue] = useState(value);
  
  const serializedNewValue = typeof value === 'object' ? JSON.stringify(value) : value
  const serializedDebouncedValue = typeof debouncedValue === 'object' ? JSON.stringify(debouncedValue) : debouncedValue

  useEffect(() => {
    console.log('useDebounce => [useEffect]', serializedDebouncedValue, serializedNewValue)
    const timer = setTimeout(() => {
      setDebouncedValue(typeof serializedNewValue === 'string' ? JSON.parse(serializedNewValue) : serializedNewValue);
    }, ms);

    if (serializedDebouncedValue === serializedNewValue) clearTimeout(timer)

    return () => {
      clearTimeout(timer);
    };
  }, [serializedNewValue, ms]);

  return debouncedValue;
}
