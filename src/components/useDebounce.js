import { useEffect, useState } from "react";

export default function useDebounce(value, delay) {
  const [debouncedVal, setDebouncedVal] = useState(value);
  useEffect(() => {
    let handler = setTimeout(() => {
      setDebouncedVal(value);
    }, delay);

    return () => clearTimeout(handler);
  }, [value, delay]);

  return debouncedVal;
}
